import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { View, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MenuNavigatorStack = createStackNavigator({
    Menu: { screen: Menu },
    Dishdetail: { screen: Dishdetail }
},
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const MenuNavigator = createAppContainer(MenuNavigatorStack);

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }
    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId })
    }
    render() {

        return (
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight }}>
                <MenuNavigator />
            </View>
        );
    }
}

export default Main;