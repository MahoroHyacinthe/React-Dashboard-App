import { useContext } from 'react'
import ThemeContext from '../Contexts/ThemeContext.jsx'

const RecentProducts = ({name,type,date,status}) => {
    
    const {Theme} = useContext(ThemeContext)
    
    return (
        <div className={`p-4 border-1 border-gray-600 rounded-xl w-xs ${Theme==="dark"?"bg-gray-800":"bg-white- text-black"}`}>
            <div className="flex justify-between">
                <h2 className=" font-bold text-amber-50">{name}</h2>
                <div className="bg-white text-green-800 rounded-2xl px-2  ">{status}</div>
            </div>    
                <div className="text-gray-400">
                    {type}
                </div>
                <div className="text-gray-400">
                    {date}
                </div>
        </div>
    );
}
export default RecentProducts;