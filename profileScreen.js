import React from "react";
import {
    View, StyleSheet, Text, Button,
    Image, TouchableOpacity,
} from "react-native";

import {
    Container, Header,
    Content, ListItem,
    Left, Body, Right, Switch, Icon
} from "native-base";



const Profile = ({ navigation }) => {

    return (
        <View>
            <View style={styles.personContainer}>
                <Image
                    source={require('./assets/person.png')}
                    style={{
                        width: 50, height: 55,
                        margin: 10
                    }}
                />
                <Text style={{
                    marginLeft: 20,
                    marginTop: 28,
                }}>Jason</Text>
            </View>


            <Container>
                <Content>

                    <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
                        <ListItem>
                            <Left>
                                <Icon name="paper" size={24} />
                                <Text>我的订单</Text>
                            </Left>
                            <Right>
                                <Icon active name="arrow-forward"
                                />
                            </Right>
                        </ListItem>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => navigation.navigate('OrderScreen')}>
                        <ListItem>
                            <Left>
                                <Icon name="mail" size={24} />
                                <Text>收件地址</Text>
                            </Left>
                            <Right>
                                <Icon active name="arrow-forward"
                                />
                            </Right>
                        </ListItem>
                    </TouchableOpacity>
                    <View style={styles.btnStyle}>
                        <Button

                            title="退出登录"
                            color="#60c73a"
                            alignItems='center'
                        />
                    </View>


                </Content>
            </Container>



        </View>


    )
}




const styles = StyleSheet.create({



    personContainer: {

        flexDirection: 'row',
        backgroundColor: 'white',

        marginBottom: 10,
    },

    btnStyle: {
        marginTop: 20,
        width: '98%',
        alignSelf: 'center'

    }



});

export default Profile;