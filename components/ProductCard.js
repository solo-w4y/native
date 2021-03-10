import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function ProductCard({ data, navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Product', data)}>
        <Text>{data.name}</Text>
        <Text>{data.type}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#000",
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
  }
})