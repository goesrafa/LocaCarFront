import {DefaultTheme, DarkTheme} from 'react-native-paper'

//link do tema utilizado: https://callstack.github.io/react-native-paper/getting-started.html
export const Ligth = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors, primary:"#00FF7F",accent: "#98FB98",
        background: "#232323",surface: "#232323",text: "#00FF7F"
    }
}

export const Dark = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary:"#1769aa",accent: "#008B8B",
        background: "#2F4F4F",surface: "#008B8B",text: "#F3F3F3"
    }
}