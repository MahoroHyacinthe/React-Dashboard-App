import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'
import Recentproducts from "../Components/Recentproducts"
import { SiDebian } from 'react-icons/si'
import Sidebar from '../Components/Sidebar.jsx'

export const Products =()=>{

    const { Theme} = useContext(ThemeContext)

    return (
        <>
            <div className={`h-screen ${Theme==="dark"?"bg-gray-900":"bg-white text-black"}`}>
              <header className="bg-blue-800 w-full  text-white ">
                <Sidebar
                 className={`pb-5 flex items-center justify-between  w-full pl-7 pt-6  ${Theme==="dark"?"bg-gray-800 text-gray-300 border-gray-500 ":"bg-white-100 text-black"}`}
                 layouts={"flex place-content-end gap-5 px-7"}
                />
              </header>
              <div className="h-100 p-5 flex flex-wrap gap-3 bg-gray-900 ">
                
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

        </>
    )

}