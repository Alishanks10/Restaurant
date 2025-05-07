import { Link } from "react-router-dom";
import logo from "../assets/images/momo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const navLi="p-5 m-1 hover:underline underline-offset-8 decoration-2 hover:font-bold cursor-pointer";

    return(
        <>
            <div
                className="sticky top-0 flex justify-between bg-cyan-700 text-sm p-1"
            >
                <p>+977 98082837482</p>
                <p>Opening Hours: Mon-Sun (8 AM - 10 PM)</p>
            </div>

            <nav
                className="sticky top-7 z-50 flex items-center justify-between bg-gray-300"
            >
                <div className="">
                    <Link to="/Restaurant">
                        <img src={logo} alt="logo" className="h-16 w-56 rounded-lg"></img>
                    </Link>
                </div>

                <ul className="flex">
                    <li className={navLi}><Link to="/">Home</Link></li>
                    <li className={navLi}><Link to="/menu">Menu </Link></li>
                    <li className={navLi}><Link to="service">Services</Link></li>
                    <li className={navLi}><Link to="/about">About Us</Link></li>
                    <li className={navLi}><Link to="contact">Contact Us</Link></li>
                </ul>

                <div
                    className="flex items-center justify-evenly w-[20%]"
                >
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400"
                    />

                    <FontAwesomeIcon icon="user" className="h-5 w-5 text-gray-600 hover:text-gray-400 cursor-pointer" />

                    <FontAwesomeIcon icon="shopping-cart" className="h-5 w-5 text-gray-600 hover:text-gray-400 cursor-pointer" />

                </div>
            </nav>
        </>
        
    )
}