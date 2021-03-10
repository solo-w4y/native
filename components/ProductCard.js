import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ data, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product', data)}>
        <Text style={styles.name}>{data.name}</Text>
        <Text style={styles.type}>{data.type}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    borderColor: "rgb(50,50,60)",
    padding: 10,
    marginHorizontal: 20,
    marginVertical: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "rgb(50,50,60)"
  },
  type: {
    opacity: 0.7,
    color: "rgb(50,50,60)"
  }
})