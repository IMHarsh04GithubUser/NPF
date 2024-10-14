import { PiSquaresFour } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import { FiList } from "react-icons/fi";
import { MdStart } from "react-icons/md";
import { FaQuestionCircle } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { LuMessageSquare } from "react-icons/lu";
const SideBar = () => {
  return (
    <>
      <div className="container-sidebar border w-fit p-8 rounded-md shadow-md flex flex-col gap-6  absolute left-0 top-0 h-full py-20">
        <div className="sidebar-top-logo flex items-center gap-6 py-2">
          <input
            type="button"
            value="Logo"
            className="border-4 border-blue-500 rounded-xl px-12 py-2"
          />

          <PiSquaresFour className="h-6 w-6" />
        </div>
        <hr  className="border"/>
        <div className="general-dashboard border text-left px-3 py-1">
          <div className="general-p font-bold text-red-500">General</div>
          <div className="dashboard-p">Dashboard</div>
        </div>
        <div className="transaction-btn border flex items-center gap-1 px-3 py-1">
          <FiMonitor />
          <p>DashBoard</p>
        </div>
        <div className="transaction-btn border flex items-center gap-1 px-3 py-1">
          <FiList />
          <p>Transactions</p>
        </div>
        <div className="Start Here-btn border flex items-center gap-1 px-3 py-1">
          <MdStart />
          <p>Start Here</p>
        </div>
        <div className="FAQ-btn border flex items-center gap-1 px-3 py-1">
          <FaQuestionCircle />
          <p>FAQ</p>
        </div>
        <div className="Learning-Module-btn border flex items-center gap-1 px-3 py-1">
          <IoMdBook />
          <p>Learning Modules</p>
        </div>
        <div className="Rewards-btn border flex items-center gap-1 px-3 py-1">
          <FaRegStar />
          <p>Rewards</p>
        </div>
        <div className="Feedback-btn border flex items-center gap-1 px-3 py-1">
          <LuMessageSquare />
          <p>Feedback</p>
        </div>
      </div>
    </>
  );
};

export default SideBar;
