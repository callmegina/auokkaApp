
import React from "react";

import Home from "./home";
import About from "./about";
import Profile from './profileScreen';
import OrderScreen from './myOrderScreen';
import ShoppingCart from './shoppingCartScreen';
import AddShipAddress from './addShipAddressScreen';
import ShipAddressScreen from './addShipAddressScreen';

import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#60c73a",
    },
    headerTitleStyle: {
        alignSelf: 'center'
    },
    headerTintColor: "white",
};

const MainStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="AUOKKA" component={Home}
            />
            <Stack.Screen name="购物车" component={ShoppingCart}
            />
        </Stack.Navigator>
    );
}

const CartStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="购物车" component={ShoppingCart} />
            <Stack.Screen name="AddShipAddress" component={AddShipAddress} />
            <Stack.Screen name="ShipAddressScreen" component={ShipAddressScreen} />
        </Stack.Navigator>
    );
}


const ProfileStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="账号" component={Profile} />
            <Stack.Screen name="About" component={About} />
        </Stack.Navigator>

    );
}


export { MainStackNavigator, ProfileStackNavigator, CartStackNavigator };