import dine from "../assets/images/dine.png";
import delivery from "../assets/images/delivery.jpg";
import { Link } from "react-router-dom";

export default function Service() {
    const menuStyle="rounded-lg bg-opacity-40 bg-gray-200 p-10 font-bold space-y-4 hover:bg-gray-300 hover:cursor-pointer";

    return (
        <>
        <div
            className="flex justify-evenly h-[77vh] bg-gray-100"
        >
            <div className="flex justify-evenly items-center space-x-20">

                <Link to="/menu">
                    <div
                        className={menuStyle}
                    >
                        <img 
                            src={dine}
                            alt="dine logo"
                            className="h-64 w-80 rounded-lg"
                        >
                        </img>

                        <p>Dine in at our restaurant</p>
                    </div>
                </Link>

                <Link to="/menu">
                    <div
                        className={menuStyle}
                    >
                        <img 
                            src={delivery}
                            alt="delivery logo"
                            className="h-64 w-80 rounded-lg"
                        >
                        </img>

                        <p>Order and we deliver at your door for FREE!</p>
                    </div>
                </Link>
            </div>
        </div>
        </>
    )
}