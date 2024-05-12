import { LeftSidebar } from "./components";  // Ensure LeftSidebar is correctly imported

const Header = () => {
    return (
        <div className="flex flex-col md:flex-row h-screen bg-[#E8D9FF]">
            <div className="w-1/12 lg:w-1/6 h-screen overflow-hidden bg-[#DDC8FF] p-0 lg:p-4 md:block hidden">
                <LeftSidebar />
            </div>
            <div className="flex-1 overflow-auto p-4">
                Main Content
                {Array.from({ length: 100 }, (_, i) => (
                    <p key={i}>This is a content line {i + 1}</p>
                ))}
            </div>
            <div className="md:w-1/6 w-full h-screen overflow-hidden bg-[#DDC8FF] p-4 md:block hidden">
                Right Sidebar
            </div>
        </div>
    );
};

export default Header;
