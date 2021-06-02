import React, { useState } from 'react'
import { View, Text, Image, Alert, StyleSheet } from 'react-native'
import { Avatar, Caption, TextInput, FAB, Button, HelperText, Checkbox, ProgressBar, Snackbar, withTheme } from 'react-native-paper'
import Header from '../components/Header'
import { BACKEND } from '../constants'

import * as DocumentPicker from 'expo-document-picker'

function AdicionarCategoria({ navigation, route, theme }) {
    const { colors } = theme
    //Dados obtidos via rotas
    const { data } = route.params
    const [nome, setNome] = useState(data.nome)
    const [status, setStatus] = useState(data.status)
    const fotoVazia = { originalname: '', path: '', size: 0, mimetype: '' }
    const [foto, setFoto] = useState(data.foto)
    const [salvandoCategoria, setSalvandoCategoria] = useState(false)
    const [erros, setErros] = useState({})
    const [upload, setUpload] = useState(false)
    const [aviso, setAviso] = useState('')

    async function salvaCategoria() {
        const novosErros = validaErrosCategoria()
        //Existe algum erro no array?
        if (Object.keys(novosErros).length > 0) {
            //Sim
            setErros(novosErros)
        } else {
            //Verificando se o  registro possui _id. Caso nao houver, inserir via POST, caso contrário via PUT
            const metodo = data._id === null ? 'POST' : 'PUT'
            let statusCategoria = (status === true || status === 'ativo') ? 'ativo' : 'inativo'
            let categoria = { nome: nome, status: statusCategoria, _id: data._id }
            setSalvandoCategoria(true)
            let url = `${BACKEND}/categorias`
            await fetch(url, {
                mode: 'cors',
                method: metodo,
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(categoria)
            }).then(response => response.json())
                .then(data => {
                    (data._id || data.message) ? setAviso('Registro salvo com sucesso!!') : setAviso('')
                    setNome('')
                    setFoto(fotoVazia)
                    //navigation.goBack()
                })
                .catch(function (error) {
                    setAviso('Não foi possível salvar o registro')
                    console.error('Houve um problema para salvar a categoria: ' + error.message)
                })
            setSalvandoCategoria(false)
        }
    }

    const validaErrosCategoria = () => {
        const novosErros = {}
        // Validando nome
        if (!nome || nome === '') novosErros.nome = 'O nome não pode ser vazio!'
        else if (nome.length > 30) novosErros.nome = 'O nome informado é muito longo'
        else if (nome.length < 3) novosErros.nome = 'O nome informado é muito curto'
        //Validando o icone
        if (foto.mimetype !== 'image/png') novosErros.foto = 'A foto é obrigatória e deve ser em formato PNG'
        return novosErros
    }

    const obterImagem = async () => {
        const apiUrl = `${BACKEND}/upload`;
        const response = await DocumentPicker.getDocumentAsync({ type: "image/png" })
        if (response.type === 'success') {
            setUpload(true)
            response.type = 'image/png'
            const data = new FormData();
            data.append('file', response);
            await fetch(apiUrl, {
                method: 'POST',
                body: data
            }).then(response => response.json())
                .then(data => {
                    if (data.upload === true) {
                        const { originalname, path, size, mimetype } = data.file[0]
                        setFoto({
                            originalname: originalname,
                            path: path,
                            size: size,
                            mimetype: mimetype
                        })
                    }
                })
                .catch(function (error) {
                    console.error('Houve um problema ao fazer o upload: ' + error.message);
                })
            setUpload(false)
        } else {
            Alert.alert(
                "Atenção!!",
                "Nenhuma imagem selecionada.")
        }
    }

    return (
        <>
            <Header titulo="Cadastro de Categorias" back={true} navigation={navigation} />
            <View style={{
                flex: 1, backgroundColor: colors.surface,
                paddingHorizontal: 24, paddingVertical: 24
            }}>
                <Caption>Informações da Categoria</Caption>
                <TextInput
                    label="Nome da categoria"
                    name="nome"
                    value={nome}
                    mode='outlined'
                    onChangeText={setNome}
                    error={ !!erros.nome }

                />
                <HelperText type="error" visible={!!erros.nome}>
                    {erros.nome}
                </HelperText>
                <View style={styles.checkbox}>
                    <Checkbox
                        status={status ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setStatus(!status);
                        }}
                    />
                    <Text style={{ color: colors.text, marginTop: 10 }}>Ativa?</Text>
                </View>
                {upload && <ProgressBar indeterminate={true} />}
                {foto.path.length > 0 ?

                    <Image
                        style={{ width: 50, height: 50 }}
                        source={{
                            uri: `${BACKEND}/${foto.path}`,
                        }}
                    />
                    :
                    (
                        <View style={{ flexDirection: 'row' }}>
                            <Avatar.Icon size={40} icon="folder" />
                            <Text style={{ color: colors.text, paddingTop: 16 }}>Ainda não foi selecionada nenhuma imagem</Text>
                        </View>
                    )
                }

                <Button icon="camera" mode="contained" onPress={obterImagem} style={{ marginTop: 32, padding: 8 }}>
                    Selecione uma Imagem
                </Button>
                <HelperText type="error" visible={!!erros.foto}>
                    {erros.foto}
                </HelperText>
                <FAB
                    style={styles.fab}
                    icon='content-save'
                    label='Salvar'
                    loading={salvandoCategoria}
                    disabled={erros.length > 0 || upload}
                    onPress={() => salvaCategoria()}
                />
                <Snackbar
                    visible={aviso.length > 0}
                    onDismiss={() => setAviso('')}
                    action={{
                        label: 'Voltar',
                        onPress: () => navigation.goBack()
                    }}>
                    <Text>{aviso}</Text>
                </Snackbar>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    text: {
        height: 300,
        fontSize: 16
    },
    fab: {
        position: 'absolute',
        margin: 20,
        right: 0,
        bottom: 0
    },
    checkbox: {
        flexDirection: 'row',
        marginBottom: 32
    },
})

export default withTheme(AdicionarCategoria)