import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

class App extends React.Component {

  testList() {
    var items = [];
    for (var i = 0; i < 100; i++) {
      if (i % 2 == 0) {
        items.push(
          <Text key={i} style={[styles.even, styles.row]}>
            Nothing to see here!
          </Text>
        );
      } else {
        items.push(
          <Text key={i} style={[styles.odd, styles.row]}>
            Something to see here!
          </Text>
        );
      }
    }
    return items;
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.testList()}
        </ScrollView>
      </View>
    );
    // <StatusBar style="auto" />
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  odd: {
    backgroundColor: 'white',
  },
  even: {
    backgroundColor: '#D3D3D3',
  },
  row: {
    padding: 3,
  },
});
