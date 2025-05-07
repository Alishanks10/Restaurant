import { Link } from "react-router-dom";
import background from "../assets/images/momoo.jpg";

export default function Homepage() {
  const menuStyle =
    "bg-opacity-40 bg-black py-2 px-6 rounded-lg text-3xl hover:bg-opacity-60 cursor-pointer";

  return (
    <div
        className="flex flex-col"
    >
        <div
            className="h-[87vh] bg-cover bg-center flex items-center justify-end pr-10 text-white"
            style={{
                backgroundImage: `url(${background})`,
            }}
        >
        <div className="flex flex-col items-end space-y-20">
            <div className="p-12 bg-opacity-40 bg-black rounded-lg flex flex-col items-center space-y-4">
            <h1 className="text-3xl">
                Swagat cha hajur haru lai Dai ko restaurant ma
            </h1>
            <span className="text-lg">( Welcome to the brother's restaurant )</span>
            </div>

            <div className="w-[100%]">
            <div className="flex justify-between">
                <h1 className={menuStyle}><Link to="/menu">Foods</Link></h1>
                <h1 className={menuStyle}>Drinks</h1>
                <h1 className={menuStyle}>Desserts</h1>
            </div>
            </div>
        </div>
        </div>
    </div>
  );
}
