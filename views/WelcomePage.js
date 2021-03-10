import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, View, Dimensions, Text, Button } from 'react-native';

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
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
    justifyContent: 'center',
  }
})