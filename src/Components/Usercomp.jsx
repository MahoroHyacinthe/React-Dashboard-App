import { useContext } from "react"
import ThemeContext from "../Contexts/ThemeContext"
const Usercomp = ({icon,type,num,className,onClick}) =>{

    const {Theme} =useContext(ThemeContext)

    return(

        <div onClick={onClick} className={`p-4 rounded-2xl flex justify-between ${Theme==="dark"?"bg-gray-800":"bg-white- text-black"}`}>
             <div className="flex gap-4 place-content-center">
                <div className="place-content-center ">
                    {icon}
                </div>
                <h1>{type}</h1>
            </div>
            <div className={className}>
                {num}
            </div>
        </div>
    )
}
export default Usercomp