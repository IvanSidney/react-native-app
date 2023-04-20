import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet } from "react-native";

import { THEME } from "../theme";

export const Listing = ({ item, onToggle }) => {
    const [color, setColor] = useState(
        item.liked ? THEME.BLUE + "70" : THEME.GREY + "70"
    );
    const onHeartToggle = (id) => {
        onToggle(id);
        setColor(item.liked ? THEME.BLUE + "70" : THEME.GREY + "70");
    };
    return (
        <View style={styles.container}>
            <Image source={item.img} style={styles.image} />
            <View style={styles.wrapper}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.wrapperText}>{item.title}</Text>
                </View>
                <View style={styles.description}>
                    <Text style={styles.descriptionText}>{item.distance}</Text>
                    <Text style={styles.descriptionText}>
                        {item.expiry ? item.expiry : null}
                    </Text>
                </View>
            </View>
            <View style={styles.buttons}>
                <Ionicons
                    name="chevron-forward"
                    size={25}
                    color="grey"
                    onPress={() => {
                        console.log(item.id);
                    }}
                />
                <Ionicons
                    name="heart-sharp"
                    size={25}
                    color={color}
                    onPress={() => {
                        onHeartToggle(item.id);
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        height: 76,
        marginHorizontal: 10,
        marginTop: 10,
        backgroundColor: THEME.WHITE,
    },
    image: { margin: 10, width: 56, height: 56, borderRadius: 56 / 2 },
    wrapper: {
        flex: 1,
        marginTop: 10,
    },
    description: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    descriptionText: {
        fontFamily: "Roboto-regular",
        fontSize: 10,
        color: "#92999E",
        marginRight: 30,
    },
    wrapperText: {
        fontFamily: "Roboto-bold",
        fontSize: 14,
    },
    buttons: {
        margin: 10,
    },
});
