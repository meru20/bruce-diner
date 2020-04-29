import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Menu } from '../data/dummy_data';
import ChosenCard from '../components/ChosenMeal';
import GridTile from '../components/GridTile';

const SingleOrder = props =>{
 // const orderId= props.route.params.menuId;
  const ord = Menu.find (ord =>{
    return ord.id === props.route.params.menuId;

  })
  
 return (
    <View style={styles.container}>
      
          <Text>{props.route.params.title}</Text>
          <Button
          title="order it!"
          onPress={() => //Alert.alert('Simple Button pressed')
          props.navigation.navigate('view',{
            menuId,
            title
          })
        }
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
      },
      mealItem: {
        height: 150,
        width: '100%',
        backgroundColor: '#dcdcdc',
        marginBottom: 15,
        borderRadius: 10,
        overflow: 'hidden',
      },
    });
    
    export default SingleOrder;
        