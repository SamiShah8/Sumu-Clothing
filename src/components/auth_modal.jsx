
import { ImCross } from "react-icons/im";
import Mylogo from "../assets/logo.png";
function AuthModal({ showModal, setShowModal }) {
    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <div className={`fixed top-0 w-full h-screen left-0  items-center justify-center flex ${showModal ? "block" : "hidden"} bg-[rgba(0,0,0,0.3)] z-50  `}>
            <div className="bg-white hidden  w-[90%] max-w-[600px] items-center  justify-start relative  ">
                <div className="flex justify-between  w-full gap-2">
                    <div className="w-[50%]  flex flex-col justify-center items-center  gap-4   ">
                        <div className="h-[75px] w-[75px]">
                            <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
                            <img src={Mylogo} alt="logo" />
                        </div>

                        <p className="text-[0.6rem]">Have an Account?</p>
                        <div><button className="text-center text-[0.6rem]  border-2 rounded-lg border-[var(--primary-bg-color)] px-3 py-1">Login</button></div>
                    </div>

                    <div className="w-[50%] flex flex-col justify-center items-center gap-4  ">
                        <div className="h-[75px] w-[75px]">
                            <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
                            <img src={Mylogo} alt="logo" />
                        </div>

                        <p className="text-[0.6rem]">Dont Have an Account?</p>
                        <div><button className="text-center text-[0.6rem]  border-2 rounded-lg border-[var(--primary-bg-color)] px-3 py-1">Signup</button></div>
                    </div>
                </div>

                <button className=" absolute  top-0 right-0" onClick={closeModal}>
                    <ImCross />
                </button>
                <div className="w-[50%] border border-red-700 bg-orange-200 z-50  hidden absolute  ">
                    <h1 className="text-center">Signin</h1>
                    <form className="flex flex-col items-center  w-[90%] ">
                        <input type="text" placeholder="Enter your Email" className=" text-[0.8rem] w-full border-2 border-[var(--primary-bg-color)] md:py-1  md:pl-4 rounded-md" /><br />
                        <input type="text" placeholder="password" className="border-2 text-[0.8rem] w-full border-[var(--primary-bg-color)] md:py-1 md:pl-4 rounded-md" />
                        <div className="flex gap-4 py-4 "><input type="checkbox" />
                            <p className="text-[0.8rem]">Remember me</p>
                        </div>
                        <div><button className="text-center text-[0.8rem]  border-2 rounded-lg border-[var(--primary-bg-color)] px-3 py-1">Login</button></div>

                        <div className="py-4 border flex flex-row items-center justify-center ">
                            <span><div className="w-[45%] border-red-700"></div></span>
                            <p className="text-[0.8rem]">or</p>
                            <span><div></div></span>

                        </div>


                    </form>
                </div>
                <div></div>

            </div>
        </div >

    );
}
export default AuthModal;