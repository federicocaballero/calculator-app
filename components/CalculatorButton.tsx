import { Pressable, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import { Colors } from '@/constants/Colors'

interface ICalculatorButtonProps {
    label: string,
    color: string,
    blackText?: boolean,
    onPress: () => void,
    // variant?: 'number' | 'operator' | 'function'
}

const CalculatorButton = ({ label, color = Colors.darkGray, blackText = false, onPress }: ICalculatorButtonProps) => {
    return (
        <Pressable
            onPress={onPress}
            style={globalStyles.button}
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