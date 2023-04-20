import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DrawerActions, useRoute } from "@react-navigation/native";

import { BuyScreen } from "../BuyScreen";
import { AppHeaderIcon } from "../../components/AppHeaderIcon";
import { TradeScreen } from "../TradeScreen";
import { SellScreen } from "../SellScreen";
import { THEME } from "../../theme";
import { AddListingScreen } from "../AddListingScreen";
import { MyListingScreen } from "../MyListingScreen";
import { MessagesScreen } from "../MessagesScreen";

const BottomTabsNavigation = ({ navigation }) => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: {
                    marginVertical: 13,
                    color: "#fff",
                    fontFamily: "Roboto-regular",
                    fontSize: 14,
                },
                headerTitleStyle: {
                    color: THEME.WHITE,
                    fontFamily: "Roboto-bold",
                    fontSize: 18,
                },
            }}
        >
            <Tab.Screen
                options={{
                    headerTitle: "Want To Buy",

                    headerStyle: {
                        backgroundColor: THEME.BLUE,
                    },

                    tabBarItemStyle: {
                        backgroundColor: THEME.BLUE,
                    },
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Add listing"
                                iconName="add"
                                onPress={() => {
                                    navigation.navigate("AddListing", {
                                        color: THEME.BLUE,
                                        index: 0,
                                    });
                                }}
                            />
                            <Item
                                title="Search"
                                iconName="search"
                                onPress={() => {}}
                            />
                        </HeaderButtons>
                    ),
                }}
                name="Buy"
                component={BuyScreen}
            />
            <Tab.Screen
                options={{
                    headerTitle: "Want To Trade",
                    headerStyle: {
                        backgroundColor: THEME.VIOLET,
                    },

                    tabBarItemStyle: {
                        backgroundColor: THEME.VIOLET,
                    },
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.toggleDrawer();
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Add listing"
                                iconName="add"
                                onPress={() => {
                                    navigation.navigate("AddListing", {
                                        color: THEME.VIOLET,
                                        index: 1,
                                    });
                                }}
                            />
                            <Item
                                title="Search"
                                iconName="search"
                                onPress={() => {}}
                            />
                        </HeaderButtons>
                    ),
                }}
                name="Trade"
                component={TradeScreen}
            />
            <Tab.Screen
                options={{
                    headerTitle: "Want To Sell",
                    headerStyle: {
                        backgroundColor: THEME.RED,
                    },

                    tabBarItemStyle: {
                        backgroundColor: THEME.RED,
                    },
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.dispatch(
                                        DrawerActions.toggleDrawer()
                                    );
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Add listing"
                                iconName="add"
                                onPress={() => {
                                    navigation.navigate("AddListing", {
                                        color: THEME.RED,
                                        index: 2,
                                    });
                                }}
                            />
                            <Item
                                title="Search"
                                iconName="search"
                                onPress={() => {}}
                            />
                        </HeaderButtons>
                    ),
                }}
                name="Sell"
                component={SellScreen}
            />
            <Tab.Screen
                options={{
                    headerTitle: "My Listings",
                    headerStyle: {
                        backgroundColor: THEME.GREY,
                    },
                    headerTitleStyle: {
                        fontFamily: "Roboto-bold",
                        fontSize: 18,
                        color: THEME.WHITE,
                    },

                    tabBarItemStyle: {
                        display: "none",
                    },
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.dispatch(
                                        DrawerActions.toggleDrawer()
                                    );
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Add listing"
                                iconName="add"
                                onPress={() => {
                                    navigation.navigate("AddListing", {
                                        color: THEME.BLUE,
                                        index: 0,
                                    });
                                }}
                            />
                            <Item
                                title="Search"
                                iconName="search"
                                onPress={() => {}}
                            />
                        </HeaderButtons>
                    ),
                }}
                name="MyListing"
                component={MyListingScreen}
            />
            <Tab.Screen
                options={{
                    headerTitle: "Messages",
                    headerStyle: {
                        backgroundColor: THEME.GREY,
                    },
                    headerTitleStyle: {
                        fontFamily: "Roboto-bold",
                        fontSize: 18,
                        color: THEME.WHITE,
                    },

                    tabBarItemStyle: {
                        display: "none",
                    },
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Toggle Drawer"
                                iconName="ios-menu"
                                onPress={() => {
                                    navigation.dispatch(
                                        DrawerActions.toggleDrawer()
                                    );
                                }}
                            />
                        </HeaderButtons>
                    ),
                    headerRight: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title="Add listing"
                                iconName="add"
                                onPress={() => {
                                    navigation.navigate("AddListing", {
                                        color: THEME.BLUE,
                                        index: 0,
                                    });
                                }}
                            />
                            <Item
                                title="Search"
                                iconName="search"
                                onPress={() => {}}
                            />
                        </HeaderButtons>
                    ),
                }}
                name="Messages"
                component={MessagesScreen}
            />
        </Tab.Navigator>
    );
};

export const BrowseListing = ({ navigation, route }) => {
    const Stack = createNativeStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName="BottomTabs"
            screenOptions={{
                headerShown: false,
                headerTitleStyle: {
                    color: "#fff",
                },
            }}
        >
            <Stack.Screen name="BottomTabs" component={BottomTabsNavigation} />
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Add Listing",
                }}
                name="AddListing"
                component={AddListingScreen}
            />
        </Stack.Navigator>
    );
};
