import thassasOracleImage from '../assets/image/oraclefull.jpg'
import underworldBreachImage from '../assets/image/breachart.jpg'
import docksideExtortionistImage from '../assets/image/docksideart.jpg'
import ionaShieldOfEmeriaImage from '../assets/image/ionaart.jpg'
import primevalTitanImage from '../assets/image/primevalart.jpg'
import swayOfTheStarsImage from '../assets/image/swayart.jpg'

const BANNEDLISTOBJECTS = [
    { 
        displayName: "Thassa's Oracle", 
        image: thassasOracleImage, 
        isBanned: false, 
        id: "ThassasOracle" 
    },
    { 
        displayName: "Underworld Breach", 
        image: underworldBreachImage, 
        isBanned: false, 
        id: "UnderworldBreach" 
    },
    { 
        displayName: "Dockside Extortionist", 
        image: docksideExtortionistImage, 
        isBanned: false, 
        id: "DocksideExtortionist" 
    },
    { 
        displayName: "Iona, Shield of Emeria", 
        image: ionaShieldOfEmeriaImage, 
        isBanned: true, 
        id: "IonaShieldofEmeria" 
    },
    { 
        displayName: "Primeval Titan", 
        image: primevalTitanImage, 
        isBanned: true, 
        id: "PrimevalTitan" 
    },
    { 
        displayName: "Sway of the Stars", 
        image: swayOfTheStarsImage, 
        isBanned: true, 
        id: "SwayoftheStars" 
    }
]

export default BANNEDLISTOBJECTS