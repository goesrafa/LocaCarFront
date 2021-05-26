import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import { BACKEND } from '../constants'

import { List, withTheme, Avatar } from 'react-native-paper'

function ListaCategoria({ data, navigation, theme }) {
    const { colors } = theme

    function botaoLadoDireito(){
        return(
            <View>
                <TouchableOpacity style={styles.botaoApagar}
                onPress={confirmaExclusaoRegistro}>
                    <Avatar.Icon size={24} icon="delete" style={{backgroundColor: colors.background}}/>
                    <Text style={{color: colors.text}}>Excluir</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <>
        <Swipeable renderRightActions={botaoLadoDireito}>
            <TouchableOpacity styles={styles.container}
                              onPress={()=> alterarCategoria(data)}>
                <View style={{flex: 1, justifyContent: 'center', backgroundColor: colors.background,
                            borderRadius: 20}}>
                                <List.Item 
                                    title={data.nome}
                                    description={`status: ${data.status}`}
                                    leftAvatar={{source: {uri: `${BACKEND}/${data.foto.path}`}}}
                                    left={props => <List.Icon {...props} icon="image" />}
                                />
                    
                </View>

            </TouchableOpacity>
        </Swipeable>


        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        height: 100,
        borderRadius: 8,
        marginBottom: 2,
        marginHorizontal: 8
    },
    botaoApagar:{
        backgroundColor: '#2F4F4F',
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'centre',
        marginRigth: 8,
        bordertopEndRadius: 20,
        borderBottomEndRadius: 20
    }
})

export default withTheme(ListaCategoria)
