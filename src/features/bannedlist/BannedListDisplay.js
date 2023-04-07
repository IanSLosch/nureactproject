
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectBannedList } from "./bannedListSlice";
import OnHover from "./OnHover";

const BannedListDisplay = ({ handleImageUpdate }) => {
    const [selectedItem, setSelectedItem] = useState(null)
    const bannedList = useSelector(selectBannedList)

    const handleSelected = (item) => {
        setSelectedItem(item)
    }

    return (
        <ul>
            {bannedList.map((item) => {
                return (
                    <div key={item.id}>
                        <OnHover item={item} handleSelected={handleSelected} handleImageUpdate={handleImageUpdate} />
                    </div>
                )
            })}
        </ul>
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