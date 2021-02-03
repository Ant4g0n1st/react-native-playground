import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

export class AppHeader extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.appHeader}>
        <Text style={styles.appTitle}>App Name</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  appHeader: {
    backgroundColor: 'teal',
    padding: 5,
  },
  appTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'white',
  },
});
