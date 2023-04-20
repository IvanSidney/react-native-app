import React from "react";

import { ListingList } from "../components/ListingList";
import { DATA } from "../data";

export const TradeScreen = ({ navigation, route }) => {
    const likedToggle = (id) => {
        const newTrade = DATA.trade.map((item) => {
            if (item.id === id) {
                item.liked = !item.liked;
            }

            return item;
        });
        DATA.trade = newTrade;
    };
    return <ListingList data={DATA.trade} onToggle={likedToggle} />;
};
