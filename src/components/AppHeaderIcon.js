import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { HeaderButton } from "react-navigation-header-buttons";
import { THEME } from "../theme";

export const AppHeaderIcon = (props) => (
    <HeaderButton
        {...props}
        iconSize={30}
        IconComponent={Ionicons}
        color={THEME.WHITE}
    />
);
