import { useSelector } from "react-redux";
import { selectBannedList } from "./bannedListSlice";
import OnHover from "./OnHover";

const BannedListDisplay = ({ handleImageUpdate }) => {
    const bannedList = useSelector(selectBannedList)

    return (
        <ul>
            {bannedList.map((item) => {
                return (
                    <div key={item.id}>
                        <OnHover item={item} handleImageUpdate={handleImageUpdate} />
                    </div>
                )
            })}
        </ul>
    )
}

export default BannedListDisplay