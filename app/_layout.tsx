import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import {useFonts} from 'expo-font'
import { Slot } from 'expo-router'
import { Colors } from '@/constants/Colors'

const RootLayout = () => {
const [loaded] = useFonts({
  SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
})

if(!loaded){
  return null;
}
  return (
    <View style={{backgroundColor: Colors.background, flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <Slot/>
    </View>
  )
}

export default RootLayout