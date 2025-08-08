
import { IoSunnyOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

import { useContext } from "react"
import ImageIcons from "./ImageIcons"
import ThemeContext from "../Contexts/ThemeContext"

const HeaderComp = () =>{

        const { toggleTheme } = useContext(ThemeContext)
        const {Theme} = useContext(ThemeContext)

    return(

        <>
            <header className={`flex justify-between pl-10 pr-30 pt-3 pb-3 ${Theme==="dark"?"text-balance": "text-black"}`} >
                <div>
                    <h1 className="font-bold">Dashboard</h1>
                    <p>welcome Back, Admin</p>
                </div>
                <div className={`${Theme==="dark"?" text-gray-400 text-balance": "text-gray-800"} flex md:gap-8 place-items-center`}>
                    <ImageIcons
                        icons ={<IoSunnyOutline />}
                        onClick = {toggleTheme} 
                    />    
                    <ImageIcons
                        icons = {<IoSettingsOutline />}
                    />    
                    <ImageIcons
                        icons = {<FaRegBell />}
                    />    
                    <p>Admin@ihuza.com</p>
                    <ImageIcons
                        icons = {<FaUserCircle />}
                    />
                </div>
            </header>
        </>
    )
} 

export default HeaderComp