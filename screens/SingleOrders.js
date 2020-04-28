import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const SingleOrder = props =>{
    return (
    <View style={styles.container}>
          <Text>this is single order screen!</Text>
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
    });
    
    export default SingleOrder;
        