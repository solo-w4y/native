import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';

export default function ProductPage({ route, navigation }) {
  const { id, name, type } = route.params;
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Text>{type}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})