import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const GridTile = props => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity style={styles.card} 
      onPress={props.onSelect}>
        <View
          style={styles.container }>
          <Text style={styles.title}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 150,
    width: '100%',
    backgroundColor: '#dcdcdc',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  gridItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    // overflow: 'hidden',
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontSize: 22,
    color: '#eee',
    
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    margin: 10,
    padding: 20,
  },
});

export default GridTile;
