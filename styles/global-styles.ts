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

    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
        gap: 10
    },

    //Buttons
    button: {
        height: 80,
        width: 80,
        borderRadius: '100%',
        backgroundColor: Colors.darkGray,
        justifyContent: 'center',
    },

    buttonText: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: '300',
        fontFamily: 'SpaceMono'
    }
});