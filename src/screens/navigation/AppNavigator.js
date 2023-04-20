import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";

import { CustomDrawer } from "../../components/CustomDrawer";
import { BrowseListing } from "./BottomTabsNavigation";
import { THEME } from "../../theme";

const Drawer = createDrawerNavigator();

export const AppNavigator = ({}) => {
    return (
        <NavigationContainer>
            <Drawer.Navigator
                drawerContent={(props) => <CustomDrawer {...props} />}
                screenOptions={{
                    drawerInactiveBackgroundColor: THEME.MAIN_BACKGROUND,
                    drawerActiveBackgroundColor: THEME.MAIN_BACKGROUND,
                    overlayColor: "#FFFFFF00",
                    headerShown: false,
                    drawerStyle: {
                        marginTop: 56,
                        width: "80%",
                    },
                }}
            >
                <Drawer.Screen
                    options={{
                        drawerLabel: "Browse Listing",
                        drawerIcon: () => (
                            <Ionicons
                                name="chevron-forward"
                                size={30}
                                color="black"
                            />
                        ),
                        drawerItemStyle: { display: "none" },
                    }}
                    name="BrowseListing"
                    component={BrowseListing}
                />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};
