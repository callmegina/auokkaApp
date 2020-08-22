import React from "react";
import {
    View, Button, Text, StyleSheet
    , TextInput, TouchableOpacity, Image, Container

} from "react-native";

import {
    Card, CardItem,
    Icon
} from 'native-base';

import { Feather } from '@expo/vector-icons';


const ShoppingCart = ({ navigation }) => {
    return (
        <View style={styles.container}>

            <View style={styles.firstSection}>


                <View style={styles.firstSectionOne}>
                    <Text style={{ fontWeight: "bold" }} >收件地址</Text>
                </View>

                <TouchableOpacity style={styles.fristSectionTwo}
                    onPress={() => navigation.navigate('AddShipAddress')}
                    style={styles.btnShipAddress}>
                    <Text>点击选择收件地址</Text>
                    <Icon name="arrow-forward"
                        style={{
                            color: 'grey',
                        }} />
                </TouchableOpacity>

            </View>

            <View style={styles.secondSection}>
                <View style={styles.secondSectionOne}>
                    <Text style={{ fontWeight: "bold" }} >优惠码</Text>
                </View>
                <TouchableOpacity style={styles.secondSectionTwo}
                    onPress={() => navigation.navigate('AddShipAddress')}
                >
                    <Text>可以在此处填入优惠码</Text>
                </TouchableOpacity>
            </View>



            <View style={styles.thirdSection}>
                <View style={styles.thirdSectionOne}>
                    <View style={styles.thirdSectionTwo}>
                        <View>

                            <Image
                                source={require('./assets/bread.png')}
                                style={{ width: 115, height: 55 }}
                            />
                        </View>

                        <View style={styles.thridTwoOne}>
                            <Text>特级面包</Text>
                            <View style={{
                                padding: 12,
                                backgroundColor: '#f2f2f2',
                                borderRadius: 30,
                                alignSelf: 'flex-start',
                                width: '70%',
                                marginTop: 10,
                                marginBottom: 10,
                            }} >
                                <Text>{'500g'}</Text>
                            </View>
                        </View>


                        <View style={styles.thirdTwoTwo}>
                            <View style={styles.addOrMinusBtn}>
                                <Feather name='minus-circle' color='#60c73a' size={23} />
                                <Text style={{
                                    fontSize: 20,
                                }}>1</Text>
                                <Feather name='plus-circle' color='#60c73a' size={23} />
                            </View>

                            <View style={{
                                alignSelf: 'flex-end'
                            }}>
                                <Text style={{
                                    color: 'red',
                                }}>$107</Text>
                                <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                            </View>
                        </View>
                    </View>

                </View>
            </View>


            <View style={styles.footer}>

                <View style={styles.footerPrice}><Text>总计 ￥2000 </Text></View>
                <View style={styles.btmFooter} >
                    <TouchableOpacity>
                        <Button title="前往购物车" color='grey' />
                    </TouchableOpacity>
                </View>

            </View>
        </View>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
    },
    btnShipAddress: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
    firstSection: {
        backgroundColor: 'white',
        marginBottom: 10,
    },

    firstSectionOne: {
        margin: 10,
    },
    fristSectionTwo: {
        margin: 20,

    },
    secondSection: {
        backgroundColor: 'white',
        marginBottom: 10,
    },
    secondSectionOne: {
        margin: 10,
    }, secondSectionTwo: {
        margin: 10,
    },
    thirdSection: {
        flex: 4,
        flexDirection: 'row',
        borderColor: 'white',
        height: '100%',
    },

    thirdSectionOne: {
        flex: 6,
    },
    thirdSectionTwo: {

        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    thridTwoOne: {
        borderColor: 'white',
        flex: 8,
        marginLeft: 10,
    },

    thirdTwoTwo: {
        borderColor: 'white',
        flex: 1,
    },
    button: {
        borderRadius: 200,
    },
    addOrMinusBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',


    },
    iconStyle: {
        backgroundColor: "green",
        borderRadius: 30,
        borderColor: '#d1cfcf',
        borderWidth: 1,
        width: '97%',
        alignSelf: 'center',
    },
    footer: {
        height: 50,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 300,
    },
});

export default ShoppingCart;
