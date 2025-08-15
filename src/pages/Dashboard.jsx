import HeaderComp from '../Components/HeaderComp'
import Sidebar from '../Components/Sidebar.jsx' 
import Boxcomp from '../Components/Boxcomp.jsx'
import Recentproducts from '../Components/Recentproducts.jsx'
import Other from '../Components/Other.jsx'
import Overview from '../Components/Overview.jsx'
import { useContext, useState } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'
import { FaCube } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiWarningOutline } from "react-icons/ti";
import UserContext from '../Contexts/UserContext.jsx'
import ProductContext from '../Contexts/ProductContext.jsx'

function Dashboard () { 
  const {User} = useContext(UserContext)
  const {Product} = useContext(ProductContext)
  const { Theme } = useContext(ThemeContext)
  const [sidebarOpen, setSidebarOpen] = useState(false)


  return (
    <div className={`w-full flex flex-col md:flex-row ${Theme==="dark" ? "bg-gray-800 text-white" : "bg-white text-black"}`}>

      {/* Sidebar for desktop, toggle for mobile */}
      <div className={`md:block ${sidebarOpen ? "block" : "hidden"} md:w-64`}>
        <Sidebar
          className={`h-screen flex flex-col w-full pl-7 pt-6 ${Theme==="dark" ? "bg-gray-800 text-gray-300 border-gray-500" : "bg-white text-black"}`}
          layouts="pt-10 gap"
        />
      </div>

      {/* Main content */}
      <div className="flex-1">
        {/* Header with toggle button on small screens */}
        <div className="flex items-center justify-between p-4 md:p-0">
          <HeaderComp />
          <button 
            className="md:hidden px-3 py-2 rounded bg-violet-500 text-white"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            Menu
          </button>
        </div>

        <div className={`grid gap-5 pt-5 ${Theme==="dark" ? "bg-gray-900" : "bg-gray-100 text-black"}`}>

          {/* Overview section */}
          <Overview />

    
          <div className="flex flex-wrap justify-center md:justify-evenly rounded p-5 gap-4">
            <Boxcomp text="Total Users" value={User} img={<LuUsersRound />} />
            <Boxcomp text="Total Products" value={Product} img={<FaCube />} />
            <Boxcomp text="Assignments" value="50" img={<IoMdCheckmarkCircleOutline />} />
            <Boxcomp text="UnAssigned Assignments" value="50" img={<TiWarningOutline />} />
          </div>  


          <div className={`mx-2 md:mx-5 grid rounded-xl ${Theme==="dark" ? "bg-gray-800" : "bg-white text-black"}`}>
            <div className="border-b border-gray-400">
              <h1 className="text-lg md:text-xl font-bold p-4">Recent Products</h1>
            </div>
            <div className={`p-4 flex flex-wrap gap-4 ${Theme==="dark" ? "bg-gray-800" : "bg-white text-black"}`}>
              {[...Array(5)].map((_, i) => (
                <Recentproducts
                  key={i}
                  name="MacBook Pro"
                  type="Laptop"
                  date="2023-10-01"
                  status="In Stock"
                />
              ))}
            </div>
          </div>

          <Other 
            userprofile="/userIcon.JP"
            username="John Doe"
            email="john.doe@example.com"
            availability="in-stock"
            lastused="2 hours ago"
            edit="edit"
            del="del"
          />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
