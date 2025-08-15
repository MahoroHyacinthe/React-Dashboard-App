import React,{ useState } from 'react'


const ProductContext =React.createContext()

export const ProductContextProvider = ({children})=>{

    const [Product,setProduct] = useState(0)

    const productAdded = () =>{
        
        setProduct( Product + 1)
    } 
    
    return (
        
        <ProductContext.Provider value={{ Product, productAdded }}>
            {children}
        </ProductContext.Provider>      
)
}
export default ProductContext