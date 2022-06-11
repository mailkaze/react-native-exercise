import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Other({ content, color }) {
  return (
    <Text style={styles[color]} >{content}</Text>
  )
}

const styles = StyleSheet.create({
  azul: {
    color: 'blue',
  },
  morado: {
    color: 'purple',
  },
  verde: {
    color: 'green',
  },
  rojo: {
    color: 'red',
  }
})