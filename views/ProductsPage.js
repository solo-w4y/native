import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, Button, FlatList } from 'react-native';
import ProductCard from "../components/ProductCard.js"

const DATA = [
  {
    id: "0",
    name: "Cake",
    type: "Dessert"
  },
  {
    id: "1",
    name: "Olivie",
    type: "Salad"
  },
  {
    id: "2",
    name: "Potato",
    type: "Ultimate"
  },
  {
    id: "3",
    name: "Boiled eggs",
    type: "Breakfast"
  },
  {
    id: "4",
    name: "Borscht",
    type: "Soup"
  },
  {
    id: "5",
    name: "Cake",
    type: "Dessert"
  },
  {
    id: "6",
    name: "Olivie",
    type: "Salad"
  },
  {
    id: "7",
    name: "Potato",
    type: "Ultimate"
  },
  {
    id: "8",
    name: "Boiled eggs",
    type: "Breakfast"
  },
  {
    id: "9",
    name: "Borscht",
    type: "Soup"
  },
  {
    id: "10",
    name: "Cake",
    type: "Dessert"
  },
  {
    id: "11",
    name: "Olivie",
    type: "Salad"
  },
  {
    id: "12",
    name: "Potato",
    type: "Ultimate"
  },
  {
    id: "13",
    name: "Boiled eggs",
    type: "Breakfast"
  },
  {
    id: "14",
    name: "Borscht",
    type: "Soup"
  },
]

export default function ProductPage({ navigation }) {
  const renderItem = ({ item }) => <ProductCard navigation={navigation} data={item} />;

  return (
    <View style={styles.container}>
      <Text>Choose to your liking</Text>
      <FlatList data={DATA} renderItem={renderItem} keyExtractor={item => item.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  }
})