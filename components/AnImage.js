import { View, Text, Image } from 'react-native'
import React from 'react'

export default function AnImage() {
  return (
    <Image
      source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
      style={{width: 200, height: 200}}
    />
  )
}