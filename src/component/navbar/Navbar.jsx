import { CiSearch } from "react-icons/ci";
import { TiMessage } from "react-icons/ti";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaBars } from "react-icons/fa6";
import { BsDot } from "react-icons/bs";
import "./style.css";
import DashboardContent from "../dashboardContent/DashboardContent";

const Navbar = ({ closeSidebar, setCloseSidebar }) => {
  return (
    <>
      <div className="nav-container flex lg:justify-end">
        <h1 className="heading text-2xl">BabyCode</h1>
        <div className="">
          <img
            height="35px"
            width="35px"
            className="profile-img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7JPMhmxsf741nKAogYTj78nouPE1TQ5Djb_ETDiYERg&s"
            alt=""
          />
        </div>
      </div>

      <div className="main-dashboard">
        <DashboardContent />
      </div>
    </>
  );
};

export default Navbar;
