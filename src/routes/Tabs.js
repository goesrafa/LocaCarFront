import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

import Home from '../screens/Home'
import Sobre from '../screens/Sobre'

export default function Tabs(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Início" component={Home} options={{tabBarIcon: () =>
                <FontAwesome name="home" size={24} color="white"/>
            
            }}/>
                           
           
            <Tab.Screen name="Sobre" component={Sobre} options={{tabBarIcon: () =>
                <FontAwesome name="cogs" size={24} color="white"/>
            
            }}/>

                      
        </Tab.Navigator>
    )
}