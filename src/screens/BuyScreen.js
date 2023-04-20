import React from "react";

import { ListingList } from "../components/ListingList";
import { DATA } from "../data";

export const BuyScreen = ({ navigation }) => {
    const likedToggle = (id) => {
        const newBuy = DATA.buy.map((item) => {
            if (item.id === id) {
                item.liked = !item.liked;
            }
            console.log(item);
            return item;
        });
        DATA.buy = newBuy;
    };
    return <ListingList data={DATA.buy} onToggle={likedToggle} />;
};
