import React from "react"
import Alldetails from "./Alldetails"
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";

const Other = () =>{

    const {Theme} = useContext(ThemeContext)

    return (
        <div classzName="">
            <div className="grid text-amber-50 rounded-t-2xl ml-5 mr-5">
                <div className={`flex justify-between ${Theme==="dark"?"bg-gray-800 p-4 rounded-t-2xl":"bg-white p-4 text-black"}`}>
                    <div>users</div>
                    <botton className =" bg-blue-500 p-2 text rounded-xl">Add User</botton>
                </div>
            </div>
            <div className={`grid grid-cols-5 text-xs ml-5 mr-5 ${Theme==="dark"?"bg-gray-700  p-3 px-5 rounded-5xl":"bg-gray-300 p-5 text-black"}`}>
                <div>USER</div>
                <div>ROLE</div>
                <div>STATUS</div>
                <div>LAST LOGIN</div>
                <div>ACTIONS</div>
            </div>
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile={<FaUserCircle />}
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
        </div>
    )
}

export default Other