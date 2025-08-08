import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"
const ImageIcons =({icons, onClick})=>{

    const {Theme} = useContext(ThemeContext)

    return (        
    
            <div onClick={onClick} className={`cursor-pointer ${Theme==="dark"?" text-gray-400 text-balance": "text-black"}`}>
                {icons}
            </div>
    
    )


}
export default ImageIcons 