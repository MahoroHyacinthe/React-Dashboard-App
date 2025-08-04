import React from "react"
import Alldetails from "./Alldetails"

const Other = () =>{
    return (
        <div classzName="grid m-5">
        <div className=" grid text-amber-50 rounded-t-2xl p-5">
            <div className="flex justify-between">
                <div>users</div>
                <botton className =" bg-blue-500 p-2 text rounded-xl">Add User</botton>
            </div>
        </div>
            <div className=" text-gray-300 grid grid-cols-5 p-4 text-xs">
                <div>USER</div>
                <div>ROLE</div>
                <div>STATUS</div>
                <div>LAST LOGIN</div>
                <div>ACTIONS</div>
            </div>
            <Alldetails
                userprofile="profile3.JPG"
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile="profile3.JPG"
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile="profile3.JPG"
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile="profile3.JPG"
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile="profile3.JPG"
                username = "John DOe"
                email ="john Doe"
                role="manager"
                availability ="instcok"
                lastused="2 hours ago"
                edit ="edit"
                del ="del"
            />
            <Alldetails
                userprofile="profile3.JPG"
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