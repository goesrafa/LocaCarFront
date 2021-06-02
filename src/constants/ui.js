import { Dimensions } from 'react-native'
const { width, height } = Dimensions.get("window")

export const COLORS ={
    ligthGray: "#F5F5FF",
    ligthGray2: "#F6F6F2",
    ligthGray3: "#898C95",
    branding: "#F6F6F2"
}

export const SIZES = {
    base: 8,
    fontNormal: 14,
    fontBig: 20,
    borderRadius: 20,
    width,
    height
}
const ui = {COLORS, SIZES}
export default ui