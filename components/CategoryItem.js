import React from 'react'

import { Image, View, Text, StyleSheet } from 'react-native'
import CatItem from '../assets/heart.png'

export default function CategoryItem({name}){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Image style={styles.categoryImage} source={ CatItem }/>
    </View>
    )
}
const styles = StyleSheet.create({
  container:{
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    backgroundColor: '#e0edc5',
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: {width: 0, height: 0},
    marginBottom: 16
  },
  categoryImage: {
    width: 128,
    height: 128
  },
  title:{
    marginBottom: 8,
    textTransform: 'uppercase',
    fontWeight: '800',
    color: '#92aa83'
  },
});