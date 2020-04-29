import React from 'react';
import { View , Text , StyleSheet , Button, TouchableOpacity} from 'react-native';


const ChosenCard = props => {
    return (

        <View style={styles.titleContainer}>
            <Text> {props.title}</Text>
            <Button title= "order it!"
            onPress={props.onPress}
            />
        </View>
       );
};

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
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

      export default ChosenCard;