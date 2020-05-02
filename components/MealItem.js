import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Meal from '../models/meal';

const MealItem = props => {
    return (
        <View style= {styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style = {{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri: props.image}} style ={styles.bgImage}>
                            <View style= {styles.titleContainer}>
                                <Text style= {styles.titleText}>{props.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style = {{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}m</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden'
    },
    titleText: {
        padding: 10,
        color: 'white',
        opacity: 1
    },
    titleContainer: {
        backgroundColor: 'rgba(100,100,100,0.8)',
    },
    mealRow: {
        flexDirection: 'row',
    },
    mealHeader: {
        height: '90%'
    },

    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        color:'#f5f5f5',
        paddingTop: 1,
        height: '10%'
    },
    bgImage:{
        width: '100%',
        height: '100%'
    }
});

export default MealItem;
