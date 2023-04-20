import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

import { THEME } from "../theme";

export const StartScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../../assets/group-1.png")}
                />
                <Text style={styles.textHeader}>WANT TO</Text>
                <View style={styles.buttons}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("BottomTabs", {
                                screen: "Buy",
                            });
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textButtons,
                                ...{ color: THEME.BLUE },
                            }}
                        >
                            Buy
                        </Text>
                    </Pressable>
                    <Text style={{ color: "#00000028" }}> | </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("BottomTabs", {
                                screen: "Trade",
                            });
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textButtons,
                                ...{ color: THEME.VIOLET },
                            }}
                        >
                            Trade
                        </Text>
                    </Pressable>
                    <Text style={{ color: "#00000028" }}> | </Text>
                    <Pressable
                        onPress={() => {
                            navigation.navigate("BottomTabs", {
                                screen: "Sell",
                            });
                        }}
                    >
                        <Text
                            style={{
                                ...styles.textButtons,
                                ...{ color: THEME.RED },
                            }}
                        >
                            Sell
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.about}>
                <Text style={styles.aboutText}>Simple and Unfiltered</Text>
                <Text style={styles.aboutText}>Free Market Economy</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: THEME.MAIN_BACKGROUND,
        alignItems: "center",
        justifyContent: "center",
    },
    textHeader: {
        fontFamily: "Roboto-bold",
        fontSize: 24,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "90%",
        height: 40,
        backgroundColor: "#fff",
    },
    textButtons: { fontFamily: "Roboto-regular", fontSize: 18 },
    image: {
        width: 84,
        height: 74,
        marginBottom: 10,
    },
    about: {
        backgroundColor: "#E2E6F1",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: 98,
    },
    aboutText: {
        fontFamily: "Roboto-regular",
        fontSize: 18,
    },
});
