import { useState } from 'react'

const OnHover = ({ item, handleSelected, handleImageUpdate }) => {
    const { name, id, image } = item
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const handleClick = () => {
        const newSrc = (image)
        console.log(newSrc)
        handleImageUpdate(newSrc)
        handleSelected(item)
    }


    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{
                color: isHovered ? 'red' : 'black',
            }}
        >
            <li key={id}>
                {name}
            </li>
        </div>
    )
}

export default OnHover

