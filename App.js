import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Counter from './components/Counter'

export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Counter</Text>
          <Counter />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30
  }
});