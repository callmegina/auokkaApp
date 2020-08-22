import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';
import TabOne from './tabOneScreen';
import TabTWO from './tabTwoScreen';

const OrderScreen = ({ navigation }) => {
    return (
        <Container>
            <Header hasTabs />
            <Tabs renderTabBar={() => <ScrollableTab />}>
                <Tab heading="Tab1">
                    <TabOne />
                </Tab>
                <Tab heading="Tab2">
                    <TabTWO />
                </Tab>

            </Tabs>
        </Container>
    )
}
export default OrderScreen;


const styles = StyleSheet.create({


});

