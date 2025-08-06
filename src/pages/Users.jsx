import Alldetails from "../Components/Alldetails"
import { FaUserCircle } from "react-icons/fa";

export const Users =()=>{
    return (
        <div className="h-screen bg-gray-800">

            <div className="bg-blue-800 p-6">
                <h1 className="text-3xl text-white font-bold" >Users</h1>
            </div>
            <div className=" pt-2 bg-gray-900">
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
        </div>
    )
}
