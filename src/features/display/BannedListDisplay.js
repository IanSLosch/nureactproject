import { BANNEDLIST } from "../../app/shared/BANNEDLIST";
import { useState } from "react";

const BannedListDisplay = () => {

    const BANNEDLIST.map(

    )


    return (

    )

}

export default BannedListDisplay

/*----------------import below-----------------*/
// const bannedObjectArray = []
// const cardDisplay = document.getElementById("cardDisplay")
// const bannedList = document.getElementById("bannedList")

// class card {
//     constructor(name) {
//         this.displayName = name;
//         this.imageURL = `/image/bannedlist/${name.replace(/[\s']/g, '-').replace(/,/g, "")}.jpg`;
//         this.id = `card-${name}`;
//     }
// }

// for (let i = 0; i < commanderBannedList.length; i++) {
//     let bannedCardObject = new card(commanderBannedList[i])
//     bannedObjectArray.push(bannedCardObject)
//     const listItem = document.createElement("li")
//     listItem.textContent = bannedCardObject.displayName
//     listItem.setAttribute("id", bannedCardObject.imageURL)
//     listItem.addEventListener("mouseover", () => changeCard(bannedCardObject))
//     bannedList.appendChild(listItem)
// }

// changeCard = (card) => {
//     cardDisplay.setAttribute("src", card.imageURL)
// }