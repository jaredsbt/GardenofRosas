import React from "react";
import { View, Button, StyleSheet } from "react-native";

const bookAppointment = () => {
    return (
        <ScrollView style = {styles.scrollContainer} onLayout={onLayoutRootView}>
            <View>
                <Text>Hello</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
    },
})

export default bookAppointment;