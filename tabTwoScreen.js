import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const TabTwo = ({ navigation }) => {
    return (
        <View style={styles.center}>
            <Text>HI</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    },
});

export default TabTwo;