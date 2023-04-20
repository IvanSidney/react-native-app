import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { TabBar } from "react-native-tab-view";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import TabViewExample from "./navigation/AddTabNavigator";
import { THEME } from "../theme";

export const AddListingScreen = ({ navigation, route }) => {
    const [color, setColor] = useState(route.params);
    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                    <Item
                        title="back"
                        iconName="chevron-back"
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </HeaderButtons>
            ),
            headerStyle: {
                backgroundColor: color,
            },
        });
    }, [color]);
    const renderTabBar = (props) => {
        switch (props.navigationState.index) {
            case 0:
                setColor(THEME.BLUE);
                break;
            case 1:
                setColor(THEME.VIOLET);
                break;
            case 2:
                setColor(THEME.RED);
                break;
            default:
                return color;
        }
        return (
            <TabBar
                {...props}
                indicatorStyle={{
                    backgroundColor: THEME.WHITE,
                    borderBottomWidth: 5,
                    borderBottomColor: color,
                }}
                renderLabel={({ route }) => (
                    <Text
                        style={{
                            fontFamily: "Roboto-regular",
                            fontSize: 18,
                            color: route.color,
                        }}
                    >
                        {route.title}
                    </Text>
                )}
                style={{ backgroundColor: THEME.MAIN_BACKGROUND }}
                indicatorContainerStyle={{
                    backgroundColor: THEME.WHITE,
                    alignItems: "flex-end",
                    marginTop: 43,
                }}
            />
        );
    };

    return (
        <View style={styles.wrapper}>
            <View style={styles.text}>
                <Text style={{ fontFamily: "Roboto-bold", fontSize: 18 }}>
                    I Want To
                </Text>
            </View>
            <TabViewExample
                initialIndex={route.params.index}
                renderTabBar={renderTabBar}
            />
            <TouchableOpacity
                onPress={() => {
                    console.log("Post");
                }}
                activeOpacity={0.7}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    height: "8%",
                    backgroundColor: color,
                }}
            >
                <Text
                    style={{
                        color: THEME.WHITE,
                        fontSize: 18,
                        fontFamily: "Roboto-regular",
                    }}
                >
                    POST
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        flex: 0.1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: THEME.MAIN_BACKGROUND,
    },
});
