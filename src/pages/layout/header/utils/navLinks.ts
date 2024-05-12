import {
  FaHome,
  FaSearch,
  FaVideo,
  FaEnvelope,
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
    url: "/reals",
    Icon: FaVideo,
    text: "Reals",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/messages",
    Icon: FaEnvelope,
    text: "Message",
    className:
      "text-primary hover:text-white hover:bg-primary p-2 rounded-lg transition-all mb-5",
  },
  {
    url: "/create",
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
