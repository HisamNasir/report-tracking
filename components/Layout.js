import Link from "next/link";
import { useState } from "react";
import { FaAdjust, FaBolt, FaHouseUser, FaUser } from "react-icons/fa";

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex h-screen">
 <div className="w-80 h-screen bg-gray-800 text-white ">
      <div className="mb-4">
        <div className="font-bold mb-2 text-xl bg-slate-700 px-2 py-5">Options</div>
        <ul className=" space-y-4 text-xl p-4">
          <li className="flex items-center">
            <FaHouseUser className="mr-2" />
            <a href="#">Home</a>
          </li>
          <li className="flex items-center">
            <FaAdjust className="mr-2" />
            <a href="#">Settings</a>
          </li>
          <li className="relative group">
            <div className=" flex items-center">
            <FaUser className="" />
            <a href="#">Users</a>

            </div>
            <ul className="absolute left-12 top-0 hidden group-hover:block bg-gray-700 p-2">
              <li>
                <a href="#">All Users</a>
              </li>
              <li>
                <a href="#">Active Users</a>
              </li>
              <li>
                <a href="#">Inactive Users</a>
              </li>
            </ul>
          </li>
          {/* Add more sidebar options as needed */}
        </ul>
      </div>
    </div>

      <div className={`w-full h-screen ${sidebarOpen ? "md:pl-64" : ""}`}>
        <nav>
        <header  className="text-gray-400 bg-gray-900 body-font">
  <div  className="container mx-auto w-fill flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'/'}  className="flex title-font font-medium items-center text-white mb-4 md:mb-0">

      <span  className="ml-3 text-xl flex items-center gap-2"><FaBolt/> Flash App</span>
    </Link>
    <nav  className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <div>
      <Link href={'/'}  className="mr-5 hover:text-white">Home</Link>
      <Link href={'/settings'}  className="mr-5 hover:text-white">settings</Link>

      </div>
      <div className="">
        <FaUser/>
      </div>

    </nav>

  </div>
</header>
        </nav>
        <div className="p-2">

        {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
