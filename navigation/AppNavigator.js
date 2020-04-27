import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OrderScreen from '../screens/OrderScreens';
import ViewScreen from '../screens/ViewOrderScreens';
import UserScreen from '../screens/UserProfileScreens';

// initailize my stack

const OrderStack= createStackNavigator();

// create navigator component
const OrderNavigator =() => {
    return (
        
        <OrderStack.Navigator>
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
        </OrderStack.Navigator>    
    )
}
export default OrderNavigator;