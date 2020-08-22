import React, { Component } from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity,
    TextInput, Button
} from 'react-native';

import { Label, Form, Item, Input, Container } from 'native-base';


const ShipAddressScreen = ({ navigation }) => {
    return (

        <TouchableOpacity style={styles.appButtonContainer}
            onPress={() => navigation.navigate('ShipAddressScreen')}>
            <Button transparent light>
                <Text style={styles.appButtonText}>添加收件地址</Text>

            </Button>

            <Text style={{
                alignSelf: 'center'
            }}>您还未添加任何地址，请点击右上角 “添加收件地址”</Text>

        </TouchableOpacity>


    );
};

export default ShipAddressScreen;

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#60c73a",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor: '#d1cfcf',
        borderWidth: 1,
        width: '97%',
        alignSelf: 'center',
        marginBottom: 15,

    },

    appButtonContainerTwo: {
        elevation: 8,
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderColor: '#d1cfcf',
        borderWidth: 1,
        width: '97%',
        alignSelf: 'center',

    },
    appButtonText: {

        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },

})
