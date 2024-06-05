import { Link } from "react-router-dom"
import Navbar from "../../Components/Navbar/Navbar"

const HomePage = () => {
    return (
        <div>
            <Navbar />
            <h1>Home Page</h1>
            <p>This is Home Page</p>
            <Link to={"/Search-Page"}>
                <button> Go To Search Page</button>
            </Link>
        </div>
    )
}

export default HomePage