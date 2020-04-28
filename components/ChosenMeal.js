import React from 'react';
import { View , Text , StyleSheet , TouchableOpacity} from 'react-native';


const ChosenMeal = props => {
    return (
        <View>
            <TouchableOpacity onPress = {props.goToSingleOrder}>
                <View style={StyleSheet.titleContainer}>
                    <Text>{props.orderData.title}</Text>

                </View>
            </TouchableOpacity>
            </View>


    );
};

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
      });

      export default ChosenMeal;