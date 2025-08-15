import React, { useState } from "react";


const  UserContext = React.createContext()

export const UserContextProvider =({children})=>{

    const [User,setUser] = useState(0)

    const handleUser=()=>{
        setUser(User + 1)
    }


    return (
        <UserContext.Provider value={{User,handleUser}} >
            {children}
        </UserContext.Provider>
        
    )
}
export default UserContext