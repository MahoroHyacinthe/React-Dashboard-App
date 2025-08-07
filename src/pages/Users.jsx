import Sidebar from "../Components/Sidebar";
import Alldetails from "../Components/Alldetails"
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";
export const Users =()=>{

    const {Theme} = useContext(ThemeContext)

    return (
        <div className="h-screen bg-gray-700">

            <header className="pb-2">

                <Sidebar
                    className={`pb-5 flex items-center justify-between  w-full pl-7 pt-6  ${Theme==="dark"?"bg-gray-800 text-gray-300 border-gray-500 ":"bg-white-100 text-black"}`}
                    layouts={"flex place-content-end gap-5 px-7"}
                    />
            </header>
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
