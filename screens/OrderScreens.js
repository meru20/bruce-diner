import React from 'react';
import { Text, View, StyleSheet, Button,FlatList, TouchableOpacity } from 'react-native';
import { Menu }from '../data/dummy_data';
//import ChosenMeal from '../components/ChosenMeal';
import GridTile from '../components/GridTile';

const OrderScreen = props =>{
  const renderOrderItems = itemData => {
    return (
      <GridTile
     title= {itemData.item.title}
      onSelect={() => {
        props.navigation.navigate ('your order',{
          menuId: itemData.item.id,
          title: itemData.item.title,
        });
      }}
       />
    );
  };
  return (<FlatList data={Menu} renderItem={renderOrderItems} />
);
};
 
const styles = StyleSheet.create({

  flatItems: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    elevation: 5,
    // overflow: 'hidden',
  },
 
    
        customHeader: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 100
        },

     
});

export default OrderScreen;
