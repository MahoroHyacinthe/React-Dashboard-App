import HeaderComp from '../Components/HeaderComp'
import Sidebar from '../Components/Sidebar.jsx' 
import Boxcomp from '../Components/Boxcomp.jsx'
import Recentproducts from '../Components/Recentproducts.jsx'
import Other from '../Components/Other.jsx'
import Alldetails from '../Components/Alldetails.jsx'
import Overview from '../Components/Overview.jsx'
import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'


function Dashboard () { 
    const {Theme} = useContext(ThemeContext)

  return (

    <div className={`w-full flex ${Theme==="dark"?"bg-gray-800":"bg-white- text-black"}`}>
      <div className='h-screen'>
        <Sidebar/>
      </div>
      <div>
        <HeaderComp/>
        <div className={`grid gap-5 pt-6 ${Theme==="dark"?"bg-gray-800":"bg-white-100 text-black"} `}>
          <Overview/>
          <div className="flex justify-evenly rounded p-4">
            <Boxcomp text="Total Users" value="130" img="/userIcon.JPG"/>
            <Boxcomp text="Total Products" value="304" img="/productIcon.JPG"/>
            <Boxcomp text="Total Assignments" value="50" img="/assignmentIcon.JPG"/>
            <Boxcomp text="Total Assignments" value="50" img="/assignmentIcon.JPG"/>
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
            availability ="in -stcok"
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