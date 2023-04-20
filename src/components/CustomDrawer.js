import React from "react";
import {
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from "@react-navigation/drawer";

import { Ionicons } from "@expo/vector-icons";
import { THEME } from "../theme";

export const CustomDrawer = (props) => {
    const labelStyle = {
        marginLeft: -25,
        justifyContent: "space-between",
        color: THEME.BLACK,
        fontFamily: "Roboto-bold",
        fontSize: 18,
    };
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />

            <DrawerItem
                icon={() => (
                    <Ionicons name="chevron-forward" size={30} color="black" />
                )}
                style={{ flex: 1 }}
                labelStyle={labelStyle}
                inactiveBackgroundColor={THEME.MAIN_BACKGROUND}
                label={"Browse Listing"}
                onPress={() => {
                    props.navigation.navigate("Buy");
                }}
            />
            <DrawerItem
                icon={() => (
                    <Ionicons name="chevron-forward" size={30} color="black" />
                )}
                style={{}}
                labelStyle={labelStyle}
                inactiveBackgroundColor={THEME.MAIN_BACKGROUND}
                label={"My Listing"}
                onPress={() => {
                    props.navigation.navigate("MyListing");
                }}
            />
            <DrawerItem
                icon={() => (
                    <Ionicons name="chevron-forward" size={30} color="black" />
                )}
                onPress={() => {
                    props.navigation.navigate("Messages");
                }}
                style={{}}
                labelStyle={labelStyle}
                inactiveBackgroundColor={THEME.MAIN_BACKGROUND}
                label={"Messages"}
            />
        </DrawerContentScrollView>
    );
};
