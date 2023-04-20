import React, { useEffect } from "react";
import { Text, View } from "react-native";

export const MyListingScreen = ({ navigation }) => {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>My Listing!</Text>
        </View>
    );
};
