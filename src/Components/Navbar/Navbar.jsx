import { Link } from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <h1>EsyehaX</h1>
            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/Search-Page"}>Search</Link>
            </div>
        </div>
    )
}

export default Navbar