import { Pressable, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'
import * as Haptics from 'expo-haptics';
interface ICalculatorButtonProps {
    label: string,
    color: string,
    blackText?: boolean,
    onPress: () => void,
    doubleSize?: boolean
    // variant?: 'number' | 'operator' | 'function'
}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress, doubleSize = false }: ICalculatorButtonProps) => {
    return (
        <Pressable
            onPress={() => {
                Haptics.selectionAsync()
                onPress()
            }}
            style={({ pressed }) => ({
                ...globalStyles.button,
                backgroundColor: color,
                opacity: pressed ? 0.8 : 1,
                width: doubleSize ? 180 : 80,
                borderRadius: 100
            })
            }
        >
            <Text style={{
                ...globalStyles.buttonText,
                color: blackText ? 'black' : 'white',
            }}
            >{label}</Text>
        </Pressable>
    )
}

export default CalculatorButton