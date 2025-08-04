
import React, { useState, useContext } from 'react'


const ProductContext =React.createContext()

export  const ProductContextProvider = ({children})=>{

    const [product,setProduct] = useState(0)

    const productAdded = () =>{
        
        setProduct((prods)=> prods + 1)
    } 
    
    return (
        
        <ProductContext.Provider value={{ product, productAdded }}>
            {children}
        </ProductContext.Provider>      
)
}
export default ProductContext