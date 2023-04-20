import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { StatusBar, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AppNavigator } from "./src/screens/navigation/AppNavigator";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "Roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
            <AppNavigator />
            <StatusBar showHideTransition={true} />
        </View>
    );
}
