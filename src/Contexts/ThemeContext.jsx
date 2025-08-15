import React,{ useState } from "react";
 
const ThemeContext = React.createContext()

export const ThemeProvider = ({children}) =>{

    const [ Theme,setTheme] = useState("dark")

    const toggleTheme  = () =>{
        setTheme((theme)=>(theme ==="dark"?"":"dark"))
    }

    return(
        
        <ThemeContext.Provider value = {{Theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext
