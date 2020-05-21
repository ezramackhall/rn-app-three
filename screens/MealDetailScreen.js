import React from 'react';
import {
    View, 
    Text, 
    StyleSheet, 
    Button, 
    ScrollView,
    Image
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import HeaderButton from '../components/HeaderButton';

import{MEALS} from '../data/dummy-data';

const Listitem = props => {
    return (
        <View style = {styles.Listitem}>
            <Text>{props.children}</Text>
        </View>
    )
}

const MealDetailsScreen = props => {

    const mealId = props.navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal => meal.id === mealId);

    return(
        <ScrollView>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
        <View style = {styles.details}>
                        <Text>{selectedMeal.duration}m</Text>
                        <Text>{selectedMeal.complexity.toUpperCase()}</Text>
                        <Text>{selectedMeal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.textTitle}>Ingredients</Text>
         {selectedMeal.ingredients.map(ingredient => (
            <Listitem key={ingredient}>{ingredient}</Listitem>
         ))}
        <Text style= {styles.textTitle}>Steps</Text>
        {selectedMeal.steps.map(step => (
            <Listitem key={step}>{step}</Listitem>
         ))}
        </ScrollView>
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
    image:{
        width:'100%',
        height: 200 
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around',
    },
    textTitle: {
        fontFamily:'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    Listitem :{
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

export default MealDetailsScreen;