import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import CategoryItem from './components/CategoryItem';

export default function App() {
  const [datas, setData] = useState([
    {id: 1, name: 'Sản phẩm cho mèo'},
    {id: 2, name: 'Phối giống'},
    {id: 3, name: 'Cắt tỉa lông'},
  ])
  return (
    <FlatList
      data = {datas}
      renderItem={({item}) => <CategoryItem name={item.name}/>}
      keyExtractor={(item) => `${item.id}`}
      contentContainerStyle={{paddingLeft: 16, paddingRight: 16}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingLeft: 16,
    paddingRight: 16
  },
});
