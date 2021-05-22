import {DefaultTheme, DarkTheme} from 'react-native-paper'

//link do tema utilizado: https://callstack.github.io/react-native-paper/getting-started.html
export const Ligth = {
    ...DefaultTheme,
    dark: false,
    colors: {
        ...DefaultTheme.colors,
        primary:"#3f51b5",
        accent: "#757de8",
        background: "#E1E1E1",
        surface: "#F3F3F3",
        text: "#232323"
    }
}

export const Dark = {
    ...DarkTheme,
    dark: true,
    colors: {
        ...DarkTheme.colors,
        primary:"#1769aa",
        accent: "#002984",
        background: "#3c4557",
        surface: "#F3F3F3",
        text: "#232323"
    }
}