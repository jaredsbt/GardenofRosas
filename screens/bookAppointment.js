import React from "react";
import { View, Button } from "react-native";

const Home = () => {
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