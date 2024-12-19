import {
  FaHome,
  FaBuilding,
  FaGift,
  FaChartLine,
  FaCheckCircle,
  FaDatabase,
  FaCog,
  FaBox,
  FaClipboard,
  FaRocket,
  FaRupeeSign,
} from "react-icons/fa";

// Data array for the components
const categories = [
  { name: "Remote", icon: <FaHome />, bgColor: "bg-blue-50" },
  { name: "MNC", icon: <FaBuilding />, bgColor: "bg-yellow-50" },
  { name: "Sales", icon: <FaGift />, bgColor: "bg-blue-50" },
  { name: "Analytics", icon: <FaChartLine />, bgColor: "bg-yellow-50" },
  { name: "Project Mg...", icon: <FaCheckCircle />, bgColor: "bg-orange-50" },
  { name: "Data Science", icon: <FaDatabase />, bgColor: "bg-blue-50" },
  { name: "Engineering", icon: <FaCog />, bgColor: "bg-yellow-50" },
  { name: "Supply Ch...", icon: <FaBox />, bgColor: "bg-orange-50" },
  { name: "Internship", icon: <FaClipboard />, bgColor: "bg-blue-50" },
  { name: "Startup", icon: <FaRocket />, bgColor: "bg-yellow-50" },
  { name: "Banking &...", icon: <FaRupeeSign />, bgColor: "bg-orange-50" },
];

export { categories };
