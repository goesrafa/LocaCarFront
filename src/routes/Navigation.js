import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AppContext } from '../themes/ThemeProvider'

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

const Stack = createStackNavigator()

export default function Navigation() {
    const { tema } = React.useContext(AppContext)
    return (
        <NavigationContainer theme={tema}>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home}
                    options={
                        {
                            title: 'LocaCar'
                        }
                    }
                />
                <Stack.Screen name="Sobre" component={Sobre} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}