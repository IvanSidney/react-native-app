import * as React from "react";
import { View, useWindowDimensions, Text } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { THEME } from "../../theme";

const BuyRoute = () => (
    <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: THEME.MAIN_BACKGROUND,
        }}
    >
        <Text>Buy</Text>
    </View>
);

const TradeRoute = () => (
    <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: THEME.MAIN_BACKGROUND,
        }}
    >
        <Text>Trade</Text>
    </View>
);

const SellRoute = () => (
    <View
        style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: THEME.MAIN_BACKGROUND,
        }}
    >
        <Text>Sell</Text>
    </View>
);

const renderScene = SceneMap({
    buy: BuyRoute,
    trade: TradeRoute,
    sell: SellRoute,
});

export default function TabViewExample({ renderTabBar, initialIndex }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(initialIndex ? initialIndex : 0);
    const [routes] = React.useState([
        { key: "buy", title: "Buy", color: THEME.BLUE },
        { key: "trade", title: "Trade", color: THEME.VIOLET },
        { key: "sell", title: "Sell", color: THEME.RED },
    ]);

    return (
        <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
        />
    );
}
