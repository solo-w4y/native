import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hi, there!</Text>
      <Button
        title="Go to Products"
        onPress={() => navigation.replace('Products')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  title: {
    fontSize: 36,
    color: "rgb(50,50,60)"
  }
})