import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"


const HomePage = () => {
    return (
        <div>
            <Navbar />
            <h1 className="text-3xl font-bold text-center pt-2">Home Page</h1>
            <p className="text-center">This is Home Page</p>
            <Link to={"/Search-Page"} className="flex justify-center pt-2">
                <button className="p-2 font-bold rounded-md text-white bg-blue-600 hover:bg-blue-700"> Go To Search Page</button>
            </Link>
        </div>
    )
}
``
export default HomePage