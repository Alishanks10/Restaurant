import chowmein from "../assets/images/chowmein.jpg"
import fokso from "../assets/images/fokso.jpeg";
import menumomo from "../assets/images/menumomo.jpg";
import yomari from "../assets/images/yomari.jpeg";
import laphing from "../assets/images/laphing.jpg";
import friedrice from "../assets/images/friedrice.jpg";

export default function Menu() {
    const menuStyle="bg-opacity-40 p-10 font-bold space-y-4 hover:bg-gray-300 hover:cursor-pointer";
    const dailyStyle="bg-opacity-40 p-10 font-bold space-y-4 hover:bg-gray-200 hover:cursor-pointer";
    const priceStyle="text-sm text-gray-700 underline underline-offset-2";

    return (
        <>
            <div
                className="min-h-[86vh] flex items-center flex-col bg-gray-200 space-y-2"
            >
                <h1 className="text-4xl w-[30%] font-semibold uppercase underline px-12 py-8 m-8">Our daily special</h1>

                <div className="w-[100%] flex justify-evenly text-center">
                    <div
                        className={menuStyle}
                    >
                        <div>
                            <img src={menumomo} alt="momo" className="h-64 w-80 rounded-lg"></img>
                        </div>

                        <div className="text-2xl">
                            Momo
                            <p className={priceStyle}>Rs. 100</p>
                        </div>
                    </div>

                    <div
                        className={menuStyle}
                    >
                        <div>
                            <img src={fokso} alt="fokso fry" className="h-64 w-80 rounded-lg"></img>
                        </div>
                        <div className="text-2xl">
                            Fokso Fry
                            <p className={priceStyle}>Rs. 80</p>
                        </div>
                    </div>

                    <div
                        className={menuStyle}
                    >
                        <div>
                            <img src={chowmein} alt="chowmein" className="h-64 w-80 rounded-lg"></img>
                        </div>

                        <div className="text-2xl">
                            Chowmein
                            <p className={priceStyle}>Rs. 90</p>
                        </div>
                    </div>
                </div>

            </div>

            <div className="flex justify-center items-center flex-col space-y-2 pb-10">
                <h1 className="text-4xl w-[26%] font-semibold uppercase underline p-6 m-6 text-center">Our Menu</h1>

                <div className="w-[100%] flex justify-evenly text-center">
                    <div
                        className={dailyStyle}
                    >
                        <div>
                            <img src={friedrice} alt="fried rice" className="h-64 w-80 rounded-lg"></img>
                        </div>

                        <div className="text-2xl">
                            Fried Rice
                            <p className={priceStyle}>Rs. 100</p>
                        </div>
                    </div>

                    <div
                        className={dailyStyle}
                    >
                        <div>
                            <img src={laphing} alt="Bbq Chicken" className="h-64 w-80 rounded-lg"></img>
                        </div>
                        <div className="text-2xl">
                            Laphing
                            <p className={priceStyle}>Rs. 60</p>
                        </div>
                    </div>

                    <div
                        className={dailyStyle}
                    >
                        <div>
                            <img src={yomari} alt="Yomari" className="h-64 w-80 rounded-lg"></img>
                        </div>

                        <div className="text-2xl">
                            Yomari
                            <p className={priceStyle}>Rs. 90</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}