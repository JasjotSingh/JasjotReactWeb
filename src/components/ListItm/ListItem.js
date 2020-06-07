import React from "react";

function ListItem(item) {

    return(
        <li className = "listItm">
            {item.item}
        </li>
    );
}

export default ListItem;