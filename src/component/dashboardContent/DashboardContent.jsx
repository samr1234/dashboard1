import { Fragment } from "react";
import LineChart from "../chart/LineChart";
import { useState } from "react";
import { LiaHomeSolid } from "react-icons/lia";
import { CiShop } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { BiMessage } from "react-icons/bi";



import "./style.css";
const data = [
  {
    icon: <LiaHomeSolid />,
    text: "Home",
  },
  {
    icon: <SlPeople />,
    text: "Community",
    // background: "transparent",
  },
  {
    icon: <BsClockHistory />,
    text: "Stories",
    background: "transparent",
  },
  {
    icon: <CiShop />,
    text: "Shop",
    background: "transparent",
  },
  {
    icon: <BiMessage />,
    text: "Feedback",
    background: "transparent",
    
  },
];
const DashboardContent = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (index) => {
    // Set the active index to the clicked element
    setActiveIndex(index);
    
  };
  return (
    <Fragment>
    <div className="mx-6 lg:pr-6 my-2 mb-20">
      <h2 className=" mb-4">Your Progress Summary</h2>

      <div className="md:flex  md:gap-5 ">
        <div className=" bg-white p-2 rounded-lg main-linechart mb-8 md:mb-0">
          <h1 className="text-md bg-[#FEF9E5] rounded-lg mx-2 mr-10 py-2 px-3 mb-4">
            <span className="text-[#2DB4D6]">Wow!</span> you're about to reach
            your targeted band
          </h1>
          <div className="line-chart">
            <LineChart />
          </div>
        </div>
        <div className="img-child">
          <img src="/public/child.png" alt="" />
          <div className="img-text">
            <h1 className="img-content text-white text-2xl md:text-3xl">
              One Share can save many lives
            </h1>
            <p className="img-content text-sm">
              Your one share can unlock a world of education for unprivileged{" "}
            </p>
            <button className="bg-white text-black px-3 py-1 w-48 m-auto mb-3 mt-3 rounded-full">
              Share App
            </button>
          </div>
        </div>
      </div>

      <div className=" mt-10 boxes-content">
        <h1 className="mb-4">Prepare with ease</h1>
        <div className="md:flex gap-14 mx-auto">
          <div>
            <div className="flex gap-4 mb-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427318922.png"
                  alt=""
                  className="w-48"
                />
                <h3>Speaking</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427318923.png"
                  alt=""
                  className="w-48"
                />
                <h3>Listening</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427319153.png"
                  alt=""
                  className="w-48"
                />
                <h3>Reading</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img src="/public/Frame 48097381.png" alt="" className="w-48" />
                <h3>Writing</h3>
              </div>
            </div>

            <div className="flex gap-4 mb-4">
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427319150.png"
                  alt=""
                  className="w-48"
                />
                <h3>Vocabulary</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427319151.png"
                  alt=""
                  className="w-48"
                />
                <h3>Classes</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427319154.png"
                  alt=""
                  className="w-48"
                />
                <h3>Book Ielts Exam</h3>
              </div>
              <div className="flex flex-col items-center gap-2">
                <img
                  src="/public/Frame 427319114.png"
                  alt=""
                  className="w-48"
                />
                <h3>Student News</h3>
              </div>
            </div>
          </div>
          <div className="md:w-56  lg:w-72 mx-auto ">
            <div className="flex justify-center items-center gap-1 bg-white  rounded-lg shadow-xl py-2">
              <img src="/public/youtube (8) 1.png" alt="" width={25} />
              <h1>App Guide Video</h1>
            </div>
            <div className="bg-white py-4 px-6 pr-4  mt-4 rounded-lg">
              <h1 className="pt-2 font-bold">Practice Mock Tests</h1>
              <p className="text-xs mt-2 pb-2 pr-8 text-black">
                Get the authentic IELTS exam experience with all four modules
                covered!
              </p>
              <button className="bg-[#125ADE] w-48 lg-w-60 rounded-full text-white text-sm py-1 mt-2 mb-2 flex justify-center mx-auto">
                Start
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="footer px-2 py-2 ">

    <div className="flex justify-evenly items-center mx-auto gap-1 sm:gap-5 md:gap-10 footer-res">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="middle-menu-content flex justify-evenly  items-center text-black"
                    
                    onClick={() => handleClick(index)}
                  >
                    <div
                      className="flex flex-col items-center justify-center text-black "
                      style={{
                        color: activeIndex === index ? "text-white" : "#E7EEFB",
                      }}
                    >
                      <span
                        className={`menu-icon  text-black mb-[3px] ${
                          activeIndex === index ? "text-[#1D46C8]" : "#E7EEFB"
                        }`}
                      >
                        {item.icon}
                      </span>
                      {/* {item.icon} */}
                      <p
                        className={`text-black text-xs sm:text-sm md:text-md ${
                          activeIndex === index ? "text-[#1D46C8]" : "#E7EEFB"
                        }`}
                      >
                        {item.text}
                      </p>
                    </div>
                    <span
                      style={{
                        color:
                          activeIndex === index
                            ? "#7D33D9"
                            : "rgb(154, 158, 171)",
                        paddingRight: "10px",
                      }}
                    >
                      {item.number}
                    </span>
                  </div>
                ))}
              </div>
    </div>
    </Fragment>
  );
};

export default DashboardContent;
