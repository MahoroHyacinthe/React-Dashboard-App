import ImageIcons from "./ImageIcons"
const Overview =() =>{
    return (
        <div className=" p-4 bg-blue-600 rounded-2xl m-5 ">
            <img src="" alt="" />
            <div className="grid">
                <h1 className="text-white font-bold">iHUZA INVENTORY - System Overview</h1>
                <article classname= " justify-between place-item-center">
                    <p>Welcome to the iHUZA Inventory System. This system is designed to help you manage your inventory efficiently.</p>
                </article>
                <div className="flex">
                    <ImageIcons icons ="/checkIcon.JPG" alt="" />
                    <p>All Systems Operational</p>
                </div>
            </div>
        </div>
    )
}
export default Overview;