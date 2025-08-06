import HeaderComp from '../Components/HeaderComp'
import Sidebar from '../Components/Sidebar.jsx' 
import Boxcomp from '../Components/Boxcomp.jsx'
import Recentproducts from '../Components/Recentproducts.jsx'
import Other from '../Components/Other.jsx'
import Overview from '../Components/Overview.jsx'
import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'
import { useNavigate } from 'react-router-dom'
import { FaCube } from "react-icons/fa";
import { LuUsersRound } from "react-icons/lu";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { TiWarningOutline } from "react-icons/ti";
function Dashboard () { 
    const {Theme} = useContext(ThemeContext)
    const productpage =useNavigate()

    const toproductpage=()=>{
      useNavigate('../pages/Products')
    }

  return (

    <div className={`w-full flex ${Theme==="dark"?"bg-gray-800 text-white":"bg-white- text-black"}`}>
      <div className='h-screen'>
        <Sidebar/>
      </div>
      <div>
        <HeaderComp/>
        <div className={`grid gap-5 pt-6 ${Theme==="dark"?"bg-gray-900":"bg-white-100 text-black"} `}>
          <Overview/>
          <div className="flex justify-evenly rounded p-5 gap-2">
            <Boxcomp text="Total Users" value="130"img={<LuUsersRound/>}/>
            <Boxcomp text="Total Products" value="304" img={<FaCube/>}/>
            <Boxcomp text="Assignments" value="50" img={<IoMdCheckmarkCircleOutline/>}/>
            <Boxcomp text="UnAssigned Assignments" value="50" img={<TiWarningOutline/>}/>
          </div>  
          <div className='ml-4 grid border-1 border-gray-400 rounded-xl '>
            <div className='border-b-1 border-gray-400 mb-5'>
            <h1 className="text-xl font-bold p-4 text-amber-50">Recent Products</h1>
            </div>
            <div className=' flex flex-wrap gap-4'>
              <Recentproducts
                name="MacBook Pro"
                type="Laptop"
                date="2023-10-01"
                status="In Stock"
              />
              <Recentproducts
                name="MacBook Pro"
                type="Laptop"
                date="2023-10-01"
                status="In Stock"
              />
              <Recentproducts
                name="MacBook Pro"
                type="Laptop"
                date="2023-10-01"
                status="In Stock"
              />
              <Recentproducts
                name="MacBook Pro"
                type="Laptop"
                date="2023-10-01"
                status="In Stock"
              />
              <Recentproducts
                name="MacBook Pro"
                type="Laptop"
                date="2023-10-01"
                status="In Stock"
              />
            </div>
          </div>
        <Other 
            userprofile="/userIcon.JP"
            username = "John DOe"
            email ="john Doe"
            availability ="in -stock"
            lastused="2 hours ago "
            edit ="edit"
            del ="del"
        />
        </div>
      </div>
    </div>
  )
}

export default Dashboard