import { useContext } from "react"
import ImageIcons from "./ImageIcons"
import ThemeContext from "../Contexts/ThemeContext"

const HeaderComp = () =>{

        const { toggleTheme } = useContext(ThemeContext)

    return(

        <>
            <header className="flex justify-between pl-10 pr-30 pt-3 pb-3 " >
                <div>
                    <h1 className="font-bold text-amber-50">Dashboard</h1>
                    <p>welcome Back, Admin</p>
                </div>
                <div className=" text-x text-zinc-300 flex md:gap-8 place-items-center">
                    <ImageIcons
                        icons = "/themeIcon.JPG"
                        onClick = {toggleTheme} 
                    />    
                    <ImageIcons
                        icons = "/settingIcon.JPG"
                    />    
                    <ImageIcons
                        icons = "/bellIcon.JPG"
                    />    
                    <p>Admin@ihuza.com</p>
                    <ImageIcons
                        icons = "/profileIcon.JPG"
                    />
                </div>
            </header>
        </>
    )
} 

export default HeaderComp