import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { ListItem } from './components/ListItem.js';
import { AppHeader } from './components/AppHeader.js';

class App extends React.Component {

  testList() {
    return Array(50).fill().map((item, index) => {
      return (
        <ListItem key={index}></ListItem>
      );
    });
  }

  render() {

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="lightblue"
          barStyle="light-content"
          translucent={false} />
        <AppHeader></AppHeader>
        <ScrollView style={styles.listViewStyle}>
          {this.testList()}
        </ScrollView>
      </View>
    );
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  listViewStyle: {
    flex: 1,
  },
});
