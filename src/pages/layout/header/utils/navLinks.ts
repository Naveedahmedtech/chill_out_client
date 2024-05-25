import {
  FaHome,
  FaSearch,
  FaVideo,
  FaComments,
  FaPlus,
  FaUser,
} from "react-icons/fa";

export const links = [
  {
    url: "/home",
    Icon: FaHome,
    text: "Home",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/search",
    Icon: FaSearch,
    text: "Search",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/reels",
    Icon: FaVideo,
    text: "Reals",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/chat",
    Icon: FaComments,
    text: "Message",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/create-reels",
    Icon: FaPlus,
    text: "Create",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/profile",
    Icon: FaUser,
    text: "Profile",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
];
