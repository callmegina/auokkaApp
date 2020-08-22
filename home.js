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
                <Text>特供商品</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.mainContainer}>
                    <View style={styles.leftContainer}>
                        <List>
                            <ListItem>
                                <Text>面包</Text>
                            </ListItem>
                            <ListItem >
                                <Text>干货</Text>
                            </ListItem>
                            <ListItem last>
                                <Text>牛奶</Text>
                            </ListItem>
                        </List>
                    </View>
                    <View style={styles.rightContainer}>
                        <View style={styles.rightContainerItem}>
                            <CardItem >
                                <View style={styles.mainTwo}>
                                    <View style={styles.mainThree}>
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
                                                    }}>$107</Text>
                                                    <TouchableOpacity ><Text>移除</Text></TouchableOpacity>
                                                </View>

                                            </View>

                                        </View>

                                    </View>

                                </View>
                            </CardItem>
                        </View>

                    </View>
                </View>


                <View>

                    <View style={styles.footer}>

                        <View style={styles.footerPrice}><Text>总计 ￥2000 </Text></View>
                        <View style={styles.btmFooter} >
                            <TouchableOpacity>
                                <Button title="前往购物车" color='grey'

                                    onPress={() => navigation.navigate('ShoppingCart')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>

            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    homescreenStyle: {
        backgroundColor: '#f2f2f2',
    },

    firstSection: {
        height: '7%',
        backgroundColor: 'white',

        marginBottom: 10,

    },
    mainContainer: {
        flexDirection: 'row',
        flext: 1,
        backgroundColor: '#f2f2f2',

    },
    leftContainer: {
        flex: 1,
        marginRight: 10,


    },
    rightContainer: {
        flex: 7,
        marginLeft: 20,
        marginBottom: 20,
        backgroundColor: '#f2f2f2',
        borderColor: 'black',
    },
    rightContainerItem: {
        marginBottom: 10,
    },
    footer: {
        height: 100,
        backgroundColor: '#60c73a',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
    },



    screen: {
        flex: 1,
        backgroundColor: '#e3e3e3',

    },
    mainOne: {
        flex: 1,
        backgroundColor: 'white',
        marginBottom: 10,
        borderColor: 'white',
    },
    mainTwo: {
        flex: 4,
        flexDirection: 'row',
        marginRight: 15,
        borderColor: 'white',
        height: '100%',
    },

    mainThree: {
        flex: 6,
    },
    secondDivTwo: {

        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginTop: 295,
    },

});

export default Home;
