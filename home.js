import React from "react";
import {
    View, Button, Text, StyleSheet,
    TouchableOpacity, Image
} from "react-native";

import {
    Container, Header, CardItem, List,
    ListItem, Icon, Content, Footer,
    FooterTab, Badge, Card
} from 'native-base';

import { Feather } from '@expo/vector-icons';



const Home = ({ navigation }) => {
    return (
        <View style={styles.center}>


            <View style={styles.firstSection}>
                <Text

                    style={styles.textFirstSection} >特供商品</Text>
            </View>


            <TouchableOpacity>
                <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>

                        <List>
                            <ListItem last>
                                <Text >面包</Text>
                            </ListItem>
                            <ListItem last >
                                <Text>干货</Text>
                            </ListItem>
                            <ListItem last >
                                <Text>速冻</Text>
                            </ListItem>
                            <ListItem last >
                                <Text>饮料</Text>
                            </ListItem>
                            <ListItem last >
                                <Text>日用品</Text>
                            </ListItem>
                            <ListItem last >
                                <Text>牛奶</Text>
                            </ListItem>
                        </List>
                    </View>



                    <View style={styles.rightContainer}>
                        <Card>
                            <CardItem >
                                <View style={styles.secondDivTwo}>
                                    <View style={styles.secondDivTwoOne}>
                                        <Image
                                            source={require('./assets/bread.png')}
                                            style={{ width: 115, height: 55 }}
                                        />
                                    </View>

                                    <View style={styles.secondDivTwoTwo}>
                                        <Text>特级面包</Text>
                                        <View style={{
                                            padding: 12,
                                            backgroundColor: '#f2f2f2',
                                            borderRadius: 30,
                                            alignSelf: 'flex-start',
                                            width: '70%',
                                            marginTop: 5,
                                        }} >
                                            <Text>{'500g'}</Text>
                                        </View>
                                    </View>


                                    <View style={styles.secondDivTwoThree}>
                                        <View style={styles.addOrMinusBtn}>
                                            <Feather name='minus-circle' color='#60c73a' size={30} />
                                            <Text style={{
                                                fontSize: 20,
                                            }}>1</Text>
                                            <Feather name='plus-circle' color='#60c73a' size={30} />
                                        </View>
                                        <View style={{
                                            alignSelf: 'flex-end'
                                        }}>
                                            <Text style={{
                                                color: 'red',
                                            }}>$55</Text>
                                            <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>


                        <Card>
                            <CardItem >
                                <View style={styles.secondDivTwo}>
                                    <View style={styles.secondDivTwoOne}>
                                        <Image
                                            source={require('./assets/milk.png')}
                                            style={{ width: 115, height: 55 }}
                                        />
                                    </View>

                                    <View style={styles.secondDivTwoTwo}>
                                        <Text>牛奶</Text>
                                        <View style={{
                                            padding: 12,
                                            backgroundColor: '#f2f2f2',
                                            borderRadius: 30,
                                            alignSelf: 'flex-start',
                                            width: '70%',
                                            marginTop: 5,
                                        }} >
                                            <Text>{'1L'}</Text>
                                        </View>
                                    </View>

                                    <View style={styles.secondDivTwoThree}>
                                        <View style={styles.addOrMinusBtn}>
                                            <Feather name='minus-circle' color='#60c73a' size={30} />
                                            <Text style={{
                                                fontSize: 20,
                                            }}>1</Text>
                                            <Feather name='plus-circle' color='#60c73a' size={30} />
                                        </View>
                                        <View style={{
                                            alignSelf: 'flex-end'
                                        }}>
                                            <Text style={{
                                                color: 'red',
                                            }}>$20</Text>
                                            <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>




                    </View>
                </View>
                <View>

                    <View style={styles.footer}>
                        <View><Text>总计 ￥2000 </Text></View>
                        <View>
                            <TouchableOpacity>
                                <Button title="前往购物车" color='grey'
                                    onPress={() => navigation.navigate('ShoppingCart')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </TouchableOpacity>
        </View >
    );
};

const styles = StyleSheet.create({
    firstSection: {
        height: '15%',
        backgroundColor: 'white',
        marginBottom: 10,
    },

    textFirstSection: {
        fontWeight: "bold",
        marginTop: 30,
        marginBottom: 30,
        marginLeft: 140,
        fontSize: 20

    },

    mainContainer: {
        flexDirection: 'row',
        flext: 1,
        backgroundColor: '#f2f2f2',
        marginTop: 5,


    },
    leftContainer: {
        flex: 1,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'white',
        alignItems: 'center'

    },



    rightContainer: {
        flex: 12,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',

    },

    footer: {
        height: 100,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },

    secondDivTwo: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderColor: 'white',
        borderWidth: 1,
        backgroundColor: 'white',
        alignItems: 'center',

    },
    secondDivTwoTwo: {
        borderColor: 'white',
        flex: 8,
        marginLeft: 8,
    },

    secondDivTwoThree: {
        borderColor: 'white',
        flex: 1,
    },

    addOrMinusBtn: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    footer: {
        height: 50,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 230,
    },

});

export default Home;
