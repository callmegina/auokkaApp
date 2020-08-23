import React, { Component } from 'react';
import {
    Image, View, ImageBackground,
    StyleSheet, TouchableOpacity
} from 'react-native';


import {
    Container, Header, Content,
    Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
} from 'native-base';

import { Feather } from '@expo/vector-icons';


const FoodItemScreen = ({ navigation }) => {
    return (
        <View style={{
            flex: 5,


        }}>
            <Image source={require('./assets/bread.png')}
                style={{
                    height: 120, width: 500, flex: 2,
                    alignSelf: 'center'
                }}>
            </Image>

            <View style={{
                flex: 5,
                backgroundColor: 'white',
                borderTopLeftRadius: 100, borderTopRightRadius: 100,
                marginTop: 30,
            }}>
                <Container>
                    <Content>
                        <Card style={{ borderTopRadius: 70 }} >
                            <CardItem>
                                <Text>特级面包</Text>
                            </CardItem>

                            <Content style={{
                                alignContent: 'center'
                            }}>
                                <View style={styles.buttonStyle}>
                                    <Button small rounded transparent
                                        style={{
                                            width: 200,
                                            backgroundColor: 'green'
                                        }}>
                                        <Text style={{
                                            color: 'white'
                                        }}>规格</Text>
                                    </Button>
                                    <Button small rounded transparent
                                        style={{
                                            width: 200,
                                            backgroundColor: 'green'
                                        }}>
                                        <Text style={{
                                            color: 'white'
                                        }}>介绍</Text>
                                    </Button>
                                </View>
                                <View style={{
                                    borderColor: '#60c73a',
                                    borderWidth: 2,
                                }}>
                                    <CardItem ><Text>面包</Text></CardItem>
                                    <CardItem><Text>原价￥100</Text></CardItem>
                                    <CardItem><Text
                                        style={{
                                            color: 'red'
                                        }}>促销价￥ 50</Text></CardItem>

                                </View>

                            </Content>
                        </Card>
                    </Content>


                    <View style={{
                        alignSelf: 'flex-end',
                    }}>
                        <TouchableOpacity onPress={() => navigation.navigate('About')}>
                            <Feather name='shopping-cart' color='#60c73a' size={30} />
                        </TouchableOpacity>
                    </View>
                </Container>

                <View style={styles.secondDivTwoThree}>
                    <View style={styles.addOrMinusBtn}>
                        <Feather name='minus-circle' color='#60c73a' size={30} />
                        <Text style={{
                            fontSize: 18,
                            marginLeft: 7,
                            marginRight: 7,
                        }}>1</Text>
                        <Feather name='plus-circle' color='#60c73a' size={30} />
                    </View>
                    <View style={styles.iconStyle}>
                        <Button title="加入购物车" primary
                            onPress={() => navigation.navigate('About')}
                            style={styles.btnStyle}>
                            <Icon name='cart' />
                        </Button>
                    </View>
                </View>
            </View>
        </View>
    )
};
export default FoodItemScreen;


const styles = StyleSheet.create({
    buttonForItem: {
        flexDirection: 'row',
        alignSelf: 'center',

    },
    secondDivTwoThree: {
        borderColor: 'white',
        backgroundColor: '#f2f2f2',
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addOrMinusBtn: {
        flexDirection: 'row',
    },

    iconStyle: {

    },

    buttonStyle: {
        flexDirection: 'row',
        marginBottom: 10,
        alignSelf: 'center',
        alignContent: 'space-around'
    }
});

