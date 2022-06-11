import { View, Text } from 'react-native'
import React from 'react'

export default function Profile({ navigation, route }) {
  return (
    <View>
      <Text>Nombre: { route.params.name }</Text>
    </View>
  )
}