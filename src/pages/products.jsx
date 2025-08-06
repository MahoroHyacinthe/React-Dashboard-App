import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'
import Recentproducts from "../Components/Recentproducts"

export const Products =()=>{

    const { Theme} = useContext(ThemeContext)

    return (
        <>
            <div className={`h-screen ${Theme==="dark"?"bg-gray-800":"bg-white text-black"}`}>
              <header className="bg-blue-800 w-full p-10 text-white">
                <h1 className="font-bold text-5xl">Products</h1>
              </header>
              <div className=" p-5 flex flex-wrap gap-3 ">
                
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