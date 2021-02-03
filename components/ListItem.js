import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.listItemContainer}>
        <View style={styles.listItem}>
          <Text style={styles.title}>MEOW MEOW MEOW</Text>
          <Text style={styles.content}>
            felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque
          </Text>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#fff',
    padding: 3,
  },
  title: {
    width: '100%',
    fontWeight: 'bold',
    marginBottom: 2,
  },
  content: {
    width: '100%',
    textAlign: 'justify',
    fontWeight: 'normal',
    marginBottom: 1,
  },
  listItemContainer: {
    padding: 2,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: 'black',
  },
});
