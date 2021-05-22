import React from 'react'
import {View, Text, Button} from 'react-native'
import { withTheme } from 'react-native-paper'

function Home({navigation, theme}){
    const { colors } = theme
    return(
        <View style={{backgroundColor: colors.surface}}>
            <Text style={{color: colors.text}}>Bem vindo ao LocaCar!!</Text>
            <Button title="Sobre o app" 
            color={colors.accent}
            onPress={() => navigation.navigate('Sobre')}/>
        </View>
    )
}
export default withTheme(Home)