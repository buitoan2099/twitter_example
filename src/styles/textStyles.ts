import { StyleSheet } from "react-native"
import { Colors } from "../values/colors"
export const TextStyles = StyleSheet.create({
    TitleBold: { fontSize: 22, color: Colors.COLOR_BLACK, fontWeight: 'bold', },
    Title: { fontSize: 18, color: Colors.COLOR_BLACK, fontWeight: 'bold', },

    ContextBold: { fontSize: 15, color: Colors.COLOR_BLACK, fontWeight: '900', },
    Context: { fontSize: 15, color: Colors.COLOR_BLACK, fontWeight: '400', },
    ContextGray: { fontSize: 15, color: Colors.COLOR_DARK_GRAY, fontWeight: '400', },

    ContextLight: { fontSize: 13, color: Colors.COLOR_BLACK, fontWeight: '400', },
    TitleButton: { fontSize: 17, color: Colors.COLOR_BLUE, fontWeight: 'bold', },
    TitleButtonRed: { fontSize: 13, color: 'red', fontWeight: 'bold', },


})