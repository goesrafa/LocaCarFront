import React from 'react'
import {View} from 'react-native'
import { withTheme, List, Switch } from 'react-native-paper'

import Header from '../components/Header'
import {Dark, Ligth } from '../themes/Themes'
import { AppContext } from '../themes/ThemeProvider'

function Configuracoes({navigation, theme}){
const { colors} = theme
const {tema, setTema } = React.useContext(AppContext)
    return(
        <>
        <Header titulo="Configurações" subtitulo="Configurações Gerais do App"
                back={true} navigation={navigation}/>
            <View style={{ backgroundColor: colors.surface, padding:10, 
                           paddingVertical: 20, flex: 1}}>

        <List.Item 
            title={tema === Dark ? 'Tema claro' : "Tema escuro"}
            onPress={() => setTema(tema===Dark ? Ligth : Dark)}
            left={() => <List.Icon icon={tema===Dark ? 'brightness-5' : 'brightness-3'} />}
            right={() => <Switch value={tema===Dark ? true : false}
            onValueChange={()=>setTema(tema===Dark? Ligth : Dark)}/>}      
        />
            </View>
        </>
    )
}

export default withTheme(Configuracoes)