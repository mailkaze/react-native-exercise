import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Other({ content, color }) {
  return (
    <View style={styles.card}>
      <Text style={styles[color]} >{content}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 5,
    backgroundColor: '#f0f0f0', 
    shadowColor: '#000', // configuración de sombra para iOS y web
    shadowOffset: { width: 1, height: 2 }, // configuración de sombra para iOS y web
    shadowOpacity: 0.4, // configuración de sombra para iOS y web
    shadowRadius: 2,   // configuración de sombra para iOS y web
    elevation: 5, // configuración de sombra para Android
    margin: 4,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },  
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