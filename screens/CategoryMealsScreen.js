import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

import MealList from '../components/MealList'

import {CATEGORIES, MEALS} from '../data/dummy-data';

const CategoryMealsScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    const selectedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return(
        <MealList listData ={selectedMeals} navigation={props.navigation}/>
    );
}

CategoryMealsScreen.navigationOptions = navigationData => {
    const catId =navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return{
        headerTitle: selectedCategory.title,
    };
};


export default CategoryMealsScreen;