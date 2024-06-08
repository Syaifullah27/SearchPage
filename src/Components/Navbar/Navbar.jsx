import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1 className="text-3xl font-bold">EsyehaX</h1>
            <div>
                <Link to={"/"} className="mr-4 text-xl hover:underline">Home</Link>
                <Link to={"/Search-Page"} className="mr-4 text-xl hover:underline">Search</Link>
            </div>
        </div>
    )
}

export default Navbar