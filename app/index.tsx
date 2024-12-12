import { View, Text } from 'react-native'
import React from 'react'
import { globalStyles } from '@/styles/global-styles'
import ThemeText from '@/components/ThemeText'
import CalculatorButton from '@/components/CalculatorButton'
import { Colors } from '@/constants/Colors'

const CalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>

      {/* Resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant='h1'>500x50000</ThemeText>
        <ThemeText variant='h2'>250</ThemeText>
      </View>

      {/* Botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          label='C'
          blackText
          //  color: {Colors.lightGray}
          onPress={() => {console.log('C');
          }}
        />
        <CalculatorButton
          label='+/-'
          blackText
          // color: {Colors.lightGray}
          onPress={() => {console.log('+/-');
          }} />
        <CalculatorButton
          label='del'
          blackText
          // color: {Colors.lightGray}
          onPress={() => {console.log('del');
          }} />
        <CalculatorButton
          label='+'

          // color: {Colors.lightGray}
          onPress={() => {console.log('+');
          }} />
      </View>

    </View>
  )
}

export default CalculatorApp