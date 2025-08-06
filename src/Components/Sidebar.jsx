import { FaCube } from "react-icons/fa";
import { MdLaptop } from "react-icons/md";
import { FaUserGroup } from "react-icons/fa6";
import { BsBoxSeam } from "react-icons/bs";
import { LuUsersRound } from "react-icons/lu"
import { BiLayer } from "react-icons/bi";
import { TbMenu2 } from "react-icons/tb";
import Usercomp from "./Usercomp"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import ThemeContext from "../Contexts/ThemeContext";


const Sidebar = () =>{
    
        const {Theme} = useContext(ThemeContext)  
  
    return(

            <div className={` h-200 flex flex-col  w-70 pl-7 pt-6  ${Theme==="dark"?"bg-gray-800 text-gray-300 border-gray-500 ":"bg-white-100 text-black"}`}>
                <div className=" flex gap-3">
                    <div className="bg-blue-500 p-4 rounded-2xl place-content-center"><FaCube/></div>
                    <div>
                        <h1 className="font-bold text-white">iHUZA</h1>
                        INVENTORY</div>       
                </div>
                <div className=" pt-10 grid gap ">
                    <Usercomp
                    icon ={<MdLaptop />}
                    type = "Dashboard"
                    />
                    <Usercomp
                    icon ={<FaUserGroup />}
                    type = "Users"
                    num ="130"
                    className={`rounded-3xl font-medium ${Theme==="dark"?"bg-gray-600":"bg-white- text-black"}`}
                    />
                    <Usercomp
                    icon = {<BsBoxSeam />}
                    type = "Products"
                    num ="356"
                     className={`rounded-3xl font-medium ${Theme==="dark"?"bg-gray-600":"bg-white- text-black"}`}
                    />
                    <Usercomp
                    icon ={<TbMenu2 />}
                    type = "Assignments"
                    num ="10"
                     className={`rounded-3xl font-medium ${Theme==="dark"?"bg-gray-600":"bg-white- text-black"}`}
                    />
                    <Usercomp
                    icon = {<BiLayer />}
                    type = "Categories"
                    />
                </div>
            </div>  
    )
}
export default Sidebar