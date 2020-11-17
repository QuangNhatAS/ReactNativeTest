import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import CategoryItem from './components/CategoryItem';

export default function App() {
  return (
    <View>
      <ScrollView style={{paddingLeft: 16, paddingRight:16}}>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
        <CategoryItem/>
      </ScrollView>
    </View>
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
