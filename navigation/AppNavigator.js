import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import OrderScreen from '../screens/OrderScreens';
import ViewScreen from '../screens/ViewOrderScreens';
import UserScreen from '../screens/UserProfileScreens';
import Colors from '../constants/colors';
import SingleOrder from '../screens/SingleOrders';

// initailize my stack

const OrderStack= createStackNavigator();

// create navigator component
const OrderNavigator =() => {
    return (
      
        
       <OrderStack.Navigator
       screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '',
        },
        headerTintColor:
          Platform.OS === 'android' ? '#fff' : Colors.primaryColor,
      }}>
        
            <OrderStack.Screen
            name= "orders"
            component={OrderScreen}
            />
            <OrderStack.Screen
            name= "view"
            component={ViewScreen}
            />
            <OrderStack.Screen
            name= "user"
            component={UserScreen}
            />
            <OrderStack.Screen
            name= "your order"
            component={SingleOrder}
            />
        </OrderStack.Navigator>
    )
};


//creating bottom tabs
const OrderTabs= createBottomTabNavigator();
 
const OrderTabsNavigator =()=>{
    return (
       
             <OrderTabs.Navigator>
                 <OrderTabs.Screen name='Order' component={OrderNavigator}/>
                 <OrderTabs.Screen name='View' component={ViewScreen}/>  
                 <OrderTabs.Screen name ='User' component= {UserScreen}/> 
                          

                 </OrderTabs.Navigator>

    );
};


export default  OrderTabsNavigator;