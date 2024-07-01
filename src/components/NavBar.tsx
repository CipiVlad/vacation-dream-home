import { CiSearch } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="padding w-full flex justify-between items-center p-4">
            <div className="text font-bold" >Logo</div>
            <ul className="flex gap-4">
                <li><Link to="#">Home</Link></li>
                <li><Link to="#">About Us</Link></li>
                <li><Link to="#">Rent Homes</Link></li>
                <li><Link to="#">FAQ</Link></li>
                <li><Link to="#">Contact</Link></li>
            </ul>
            <div className="flex gap-4" >
                <CiSearch />
                <FaHeart />
                <FaUser />
            </div>
        </nav>
    )
}
export default NavBar