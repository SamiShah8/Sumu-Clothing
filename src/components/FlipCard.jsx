import { ImCross } from "react-icons/im";

export default function FlipCard(props) {
  const HideShow = () => {
    props.setCrossBtn(false);
  };

  return (
    <div
      className={`min-h-screen  ${
        props.crossBtn ? " block" : "hidden"
      }  bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      <div
        className={`flip-container   perspective relative w-[90%] max-w-[600px]`}
      >
        <div className={`flip-card`}>
          {/* Front Side */}
          <div className="front w-full h-full flex flex-col justify-center items-center gap-6 bg-white rounded-lg shadow-md  backface-hidden">
            <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
            <form className="flex flex-col w-[90%] items-center ">
              <input
                type="text"
                placeholder="Enter your Email"
                className=" text-[0.8rem] w-full border-2 border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
              />
              <input
                type="text"
                placeholder="password"
                className="border-2 text-[0.8rem] w-full border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
              />
              <div className="flex gap-4 py-4 item-center">
                <input type="checkbox" className="h-5 w-5" />
                <p className="text-[0.8rem]">Remember me</p>
              </div>
              <button
                type="submit"
                className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1"
              >
                login
              </button>
            </form>
            <p className="text-[0.6rem]">Don't Have an Account?</p>
            <button className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1">
              Signup
            </button>
            <button
              onClick={HideShow}
              className="absolute top-0 right-0 p-2   "
            >
              <ImCross />
            </button>
          </div>

          {/* Back Side */}
          <div className="back w-full   h-full flex flex-col justify-center items-center py-8 gap-6 bg-white rounded-lg shadow-md relative rotate-y-180 backface-hidden">
            <p className="text-[0.6rem] font-bold">Sumu Clothing</p>
            <form className="flex flex-col items-center   w-[90%] ">
              <input
                type="text"
                placeholder="Enter your Email"
                className=" text-[0.8rem] w-full border-2 border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
              />
              <br />
              <input
                type="text"
                placeholder="password"
                className="border-2 text-[0.8rem] w-full border-[var(--primary-bg-color)] py-1 pl-4 rounded-md"
              />
              <div className="flex gap-4 py-4 items-center ">
                <input type="checkbox" className="h-5 w-5" />
                <p className="text-[0.8rem]">Remember me</p>
              </div>
              <button
                type="submit"
                className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1"
              >
                Signup
              </button>
            </form>
            <p className="text-[0.6rem]">Have an Account?</p>
            <button className="text-center text-[0.6rem] border-2 rounded-lg border-[purple] px-3 py-1">
              login
            </button>
            <button
              onClick={HideShow}
              className="absolute top-0 right-0 p-2   "
            >
              <ImCross />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
