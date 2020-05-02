import React from 'react';
import {Platform} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen 
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS ==='android' ? Colors.primaryColor : 'white',
        },
        headerTintColor: Platform.OS ==='android' ? 'white' : 'black',
        headerBackTitle: 'Back'
}
});

export default createAppContainer(MealsNavigator);