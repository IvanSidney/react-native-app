import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";

import { Listing } from "./Listing";

export const ListingList = ({ data, onToggle }) => {
    if (!data.length) {
        return (
            <View>
                <Text style={styles.noItems}>
                    You have not created any listings yet. Click on the plus
                    icon to create a new listing.
                </Text>
            </View>
        );
    }

    return (
        <View style={styles.wrapper}>
            <FlatList
                data={data}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({ item }) => (
                    <Listing item={item} onToggle={onToggle} />
                )}
                fadingEdgeLength={200}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    noItems: {
        fontFamily: "Roboto-regular",
        fontSize: 20,
        textAlign: "center",
        marginVertical: 10,
    },
});
