import { Outlet } from "react-router-dom";
import { LeftSidebar } from "./components";  // Ensure LeftSidebar is correctly imported
import Footer from "./components/mobile/Footer";
import TopHeader from "./components/mobile/TopHeader";
import RightSideBar from "../rightSideBar/ReactSideBar";

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#E8D9FF]">
            <div className="w-1/12 lg:w-1/6 h-screen overflow-hidden bg-[#DDC8FF] p-0 xl:p-4 md:block hidden">
                <LeftSidebar />
            </div>
            <div className="flex-1 overflow-auto">
                <TopHeader />
                <div className="p-4 pt-24 md:pt-12 custom-scrollbar">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <div className="md:w-1/6 w-full h-screen overflow-hidden bg-[#DDC8FF] p-4 md:block hidden">
                <RightSideBar />
            </div>
        </div>
    );
};

export default Header;
