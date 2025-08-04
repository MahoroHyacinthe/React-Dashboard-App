
import Usercomp from "./Usercomp"

const Sidebar = () =>{
  
    return(

            <div className=" h-200 flex flex-col  w-70 pl-2  text-gray-300 ">
                <div className=" pl-5 p-2">
                    <img src="/Logo.JPG" alt="img"/>        
                </div>
                <div className=" p-2">
                    <Usercomp
                    icon = "/dashboardIcon.JPG"
                    type = "Dashboard"
                    />
                    <Usercomp
                    icon = "/UserIcon.JPG"
                    type = "Users"
                    num ="130"
                    />
                    <Usercomp
                    icon = "/productIcon.JPG"
                    type = "Products"
                    num ="304"
                    />
                    <Usercomp
                    icon = "/AssignmentIcon.JPG"
                    type = "Assignments"
                    num ="304"
                    />
                    <Usercomp
                    icon = "/categies Icon.JPG"
                    type = "Categories"
                    />
                </div>
            </div>  
    )
}
export default Sidebar