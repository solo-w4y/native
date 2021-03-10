import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function ProductPage({ route, navigation }) {
  const { id, name, type } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.type}>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize: 36,
    fontWeight: "bold",
    color: "rgb(50,50,60)"
  },
  type: {
    fontSize: 24,
    opacity: 0.7,
    color: "rgb(50,50,60)"
  }
})