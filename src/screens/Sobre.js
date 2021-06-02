import React from 'react'
import {View, Text} from 'react-native'
import { withTheme } from 'react-native-paper'

function Sobre({route, theme}){
    const { colors } = theme
    return(
        <View style={{backgroundColor: colors.surface}}>
            <Text style={{color: colors.text}}>
                Aplicativo mobile de Locação de Carro
                Em ReactJS Juntamente com o banco de dados integrado ao 
                Heroku e GitHib!!
            </Text>
        </View>
    )
}
export default withTheme(Sobre)