import "./style.css";

import { LiaHomeSolid } from "react-icons/lia";
import { CiShop } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { SlPeople } from "react-icons/sl";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

import { RiLogoutBoxLine } from "react-icons/ri";
import { useState } from "react";
import { CiCircleCheck } from "react-icons/ci";

const Sidebar = ({ closeSidebar }) => {
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
      img:<img src="/Frame 48097125.png" alt="" width={22}/>,
      text: "Stories",
      background: "transparent",
    },
    {
      icon: <CiShop />,
      text: "Shop",
      background: "transparent",
    },
    {
      icon: <FaRegMessage />,
      text: "Feedback",
      background: "transparent",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    // Set the active index to the clicked element
    setActiveIndex(index);
  };
  return (
    <>
      {closeSidebar && (
        <div className="sidebar-container bg-[#1158DA] text-white">
          <div className="nav-content justify-between">
            {/* heading section */}

            <div>
              <div className="nav-heading">
                <h2>BabyCode</h2>
              </div>
              <div className="nav-middle">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className="middle-menu-content"
                    style={{
                      background: activeIndex === index ? "#3771DD" : "",
                      borderRadius: "8px",
                    }}
                    onClick={() => handleClick(index)}
                  >
                    <div
                      className="sub-menu-content items-center"
                      style={{
                        color: activeIndex === index ? "text-white" : "#E7EEFB",
                      }}
                    >
                      <span
                        className={`menu-icon ${
                          activeIndex === index ? "text-white" : "#E7EEFB"
                        }`}
                      >
                        {item.icon ? item.icon : item.img  }
                      </span>
                      {/* {item.icon} */}
                      <p
                        className={`${
                          activeIndex === index ? "text-white" : "#E7EEFB"
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
            {/* menu section */}

            <div className="mb-8 ">
              <div className="bg-[#E6EFFF] mx-3 py-4 rounded-md mb-10">
              <div className="px-4">
                <h1 className="text-[#285AE9] font-bold text-md">
                  Explore Premium{" "}
                  <span className="text-[#545AF9]">features with ease!</span>
                </h1>
                <div className=" mt-4 my-2 flex gap-1.5">
                  <CiCircleCheck color="black" />
                  <h6 className="text-[#8A8C90] text-xs">
                    unlimited Speaking Test Access
                  </h6>
                </div>
                <div className="my-2 flex gap-1.5">
                  <CiCircleCheck color="black" />
                  <h6 className="text-[#8A8C90] text-xs">
                    unlimited Speaking Test Access
                  </h6>
                </div>
                <div className="my-2 flex gap-1.5">
                  <CiCircleCheck color="black" />
                  <h6 className="text-[#8A8C90] text-xs">
                    unlimited Speaking Test Access
                  </h6>
                </div>
                <div className="my-2 flex gap-1.5 ">
                  <CiCircleCheck color="black" />
                  <h6 className="text-[#8A8C90] text-xs">
                    unlimited Speaking Test Access
                  </h6>
                </div>
               
              </div>
              <div className="flex justify-between mt-4 items-center">
                  <h5 className="text-black text-sm pl-3">Only at ₹ 299</h5>
                  <button className="bg-[#125ADE] text-[#F0F4FD] rounded-tl-xl rounded-bl-xl py-2 pl-2 pr-2 flex justify-between text-md gap-2 shadow-md items-center ">
                    Buy Now
                   
                    <FaRegArrowAltCircleRight  size={20}/>
                  </button>
                </div>
              </div>
              <div className="bottom-menu-content">
                <RiLogoutBoxLine className="menu-icon" />
                <p>Logout</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
