import React from "react";

import { ListingList } from "../components/ListingList";
import { DATA } from "../data";

export const SellScreen = ({}) => {
    const likedToggle = (id) => {
        const newSell = DATA.sell.map((item) => {
            if (item.id === id) {
                item.liked = !item.liked;
            }

            return item;
        });
        DATA.sell = newSell;
    };
    return <ListingList data={DATA.sell} onToggle={likedToggle} />;
};
