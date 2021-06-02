import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome } from '@expo/vector-icons'
import { COLORS } from '../constants'
const Tab = createBottomTabNavigator()

import Home from '../screens/Home'
import Configuracoes from '../screens/Configuracoes'
import Categorias from '../screens/ListaCategorias'
 
function Tabs(){
    return(
        <Tab.Navigator
        
        screenOptions={({ route, navigation }) => {
            return { tabBarLabel: navigation.isFocused() ? route.name : ''}
        }}
		tabBarOptions={{
		activeTintColor: COLORS.lightGray2,
        style: {
            paddingTop: 4,
            paddingBottom: 4,
            borderTopWidth: 1,
            borderTopColor: COLORS.lightGray
      }
	}}  
        
        
        >
            <Tab.Screen name="Início" component={Home} options={{tabBarIcon: () =>
                <FontAwesome name="home" size={24} color="white"/>
            
            }}/>
                           
           
            <Tab.Screen name="Categorias" component={Categorias} options={{tabBarIcon: () =>
                <FontAwesome name="car" size={24} color="white"/>
            
            }}/>

            <Tab.Screen name="Configurações" component={Configuracoes}
                options={{tabBarIcon: () => (
                        <FontAwesome name="cogs" size={24} color="white"/>),
                        showLabel: false
                }} />
                      
        </Tab.Navigator>
    )
}
export default Tabs