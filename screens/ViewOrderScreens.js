import React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {Menu} from '../data/dummy_data';

const ViewScreen = props =>{
    //const renderOrders= itemData => {
//
    //}
   // <View style={styles.container}>
         // <Text>this is view screen!</Text></View>

         return ( <View style={styles.container}>
           <Text>this is view screen!</Text></View>
           /* <ListView
              style={styles.container}
              dataSource={this.state.dataSource}
              renderRow={(data) => <Row {...data} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />*/
// {MenuId: itemData.item.id, title: itemData.item.title}
    
    );
}
    
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      separator: {
        flex: 1,
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#8E8E8E',
      },
    });
    
    export default ViewScreen;