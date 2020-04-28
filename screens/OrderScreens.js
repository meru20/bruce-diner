import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Menu from '../data/dummy_data';
import ChosenMeal from '../components/ChosenMeal';
import { FlatList } from 'react-native-gesture-handler';
import GridTile from '../components/GridTile';
//import GridTile from '../components/GridTile';

const OrderScreen = props =>{
  //const catId= props.route.params.id;
  //const catId= props.route.params.mealId;
  //const category =Menu.find(cat => cat.id === catId);
 // const displayedOrders=Menu.filter(
   // menu => menu.id.indexOf (catId) >= 0
  //);
  
  const renderOrderItems = itemData => {
    return (
      <GridTile
      orderData = {itemData.item.title}
      onSelect={() => {
        props.navigation.navigate ('your order',{
          menuId: itemData.item.id,
          title: itemData.item.title,
        });
      }}
       />
    );
  };
  return (<FlatList data={Menu} renderItem={renderOrderItems} numColumns={1}/>
);
};

/*<View style={styles.container}>
      <Text>I would like to order ...</Text>
      <Text>drop down list</Text>
      <Button
          title="order it!"
          onPress={() => 
            props.navigation.navigate("your order")}
        />
    </View>*/
 




const styles = StyleSheet.create({
    
        customHeader: {
        textAlign: 'center',
        fontSize: 20,
        marginTop: 100
        },
        
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

export default OrderScreen;
