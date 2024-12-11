import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";



export const globalStyles = StyleSheet.create({
        calculatorContainer: {
            flex: 1,
            justifyContent: 'flex-end',
            paddingBottom: 20,
        },

        mainResult: {
            color: Colors.textPrimary,
            fontSize: 70,            
            textAlign: 'right',
            fontWeight: '400'
        },
        subResult: {
            color: Colors.textSecondary,
            fontSize: 40,
            textAlign: 'right',
            fontWeight: '400'
        },

        //TODO hacer estilos para los botones contenedores
    });