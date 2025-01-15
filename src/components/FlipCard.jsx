
import MyLogo from "../assets/logo.png";

export default function FlipCard() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200">
            <div className="flip-container perspective">
                <div className="flip-card">
                    {/* Front Side */}
                    <div className="front w-full h-full flex flex-col justify-center items-center py-8 gap-6 bg-white rounded-lg shadow-md absolute backface-hidden">
                        <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
                        <div className="h-[75px] w-[75px]">
                            <img src={MyLogo} alt="logo" />
                        </div>
                        <p className="text-[0.6rem]">Have an Account?</p>
                        <button className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1">
                            Login
                        </button>
                    </div>

                    {/* Back Side */}
                    <div className="back w-full h-full flex flex-col justify-center items-center py-8 gap-6 bg-white rounded-lg shadow-md absolute rotate-y-180 backface-hidden">
                        <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
                        <div className="h-[75px] w-[75px]">
                            <img src={MyLogo} alt="logo" />
                        </div>
                        <p className="text-[0.6rem]">Don't Have an Account?</p>
                        <button className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1">
                            Signup
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
