import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity } from 'react-native';



const OrderScreen = props =>{
return (
<View style={styles.container}>
      <Text>I would like to order ...</Text>
      <Text>drop down list</Text>
      <Button
          title="order it!"
          onPress={() => 
            props.navigation.navigate("view")}
        />
    </View>
  );
}

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
