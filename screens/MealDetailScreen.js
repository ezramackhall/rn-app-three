import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import{MEALS} from '../data/dummy-data';

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <View style ={styles.screen}>
            <Text>Meal Details Screen</Text>
            <Text>{selectedMeal.title}</Text>
        </View>
    );
}

MealDetailsScreen.navigationOptions = navigationData => {
    const mealId =navigationData.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return{
        headerTitle: selectedMeal.title,
        headerTitleStyle: {paddingHorizontal: '15%', textAlign:'left'},
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item 
                    title='Fav' 
                    iconName='ios-star' 
                    onPress = {() => {
                    }}
                />
            </HeaderButtons>
        )
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    }
});

export default MealDetailsScreen;