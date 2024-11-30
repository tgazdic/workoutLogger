import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <Button title="Existing User" onPress={() => console.log("Existing User")} />
            <Button title="New User" onPress={() => console.log("New User")} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
