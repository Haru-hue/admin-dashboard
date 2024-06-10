import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { LuShoppingBag } from "react-icons/lu";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineDashboard, MdOutlineSpaceDashboard } from "react-icons/md";
import { CiSettings, CiUser } from "react-icons/ci";
import { GrInsecure } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "@/hooks/useSidebar";
import ExpandMenu from "./ExpandMenu";
import LinkItem from "./LinkItem";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);

  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-9999 flex h-screen w-20 flex-col overflow-y-hidden bg-black duration-300 ease-linear  dark:bg-boxdark lg:static lg:translate-x-0 `,
        {
          "w-70": isSidebarOpen,
        },
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="relative flex w-full items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <Link className="flex items-center" href="/">
          <Image
            className="h-6 w-6 rounded-md"
            width={400}
            height={400}
            src={"/images/logo/logo-icon.png"}
            alt="Logo"
          />
          {isSidebarOpen && (
            <h1 className=" ml-2 text-xl font-semibold text-white">
              JoshDev
            </h1>
          )}
        </Link>
        {isSidebarOpen && (
          <FiMenu onClick={toggleSidebar} className="w-6 h-6" />
        )}
      </div>
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="px-4 py-4  lg:px-6">
          <div>
            <ul
              className={cn("mb-6 flex flex-col  gap-1.5", {
                "items-center justify-center": !isSidebarOpen,
              })}
            >
              <li>
                <ExpandMenu
                  name="Homepage"
                  icon={<MdOutlineDashboard />}
                >
                  <LinkItem
                    icon={<LuShoppingBag />}
                    title="E-commerce"
                    href="/"
                  />
                </ExpandMenu>
              </li>
              <li>
                <LinkItem
                  title="Calendar"
                  href="/calendar"
                  icon={<FaCalendarAlt />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Settings"
                  href="/settings"
                  icon={<CiSettings />}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Profile"
                  href="/profile"
                  icon={<CiUser />}
                ></LinkItem>
              </li>
              <li>
                <ExpandMenu name="Auth" icon={<GrInsecure />}>
                  <LinkItem
                    title="Sign In"
                    href="/auth/signin"
                  ></LinkItem>
                  <LinkItem
                    title="Sign up"
                    href="/auth/signup"
                  ></LinkItem>
                </ExpandMenu>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
