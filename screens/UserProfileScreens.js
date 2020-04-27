import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';


const UserScreen = props =>{
    return (
    <View style={styles.container}>
          <Text>this is user screen!</Text>
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
    
    export default UserScreen;