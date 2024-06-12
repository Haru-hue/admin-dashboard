import Link from "next/link";
import Image from "next/image";
import cn from "classnames";
import { MdOutlineDashboard } from "react-icons/md";
import { CiSettings, CiUser } from "react-icons/ci";
import { GrInsecure } from "react-icons/gr";
import { FiMenu } from "react-icons/fi";
import { useSidebar } from "@/hooks/useSidebar";
import ExpandMenu from "./ExpandMenu";
import LinkItem from "./LinkItem";
import useLocalStorage from "@/hooks/useLocalStorage";

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar((state) => state);
  const [IS_USER_TOKEN_AVAILABLE] = useLocalStorage('userToken');
  const isLinkDisabled = IS_USER_TOKEN_AVAILABLE ? true : false;
  return (
    <aside
      className={cn(
        `absolute left-0 top-0 z-9999 flex h-screen flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 `,
        {
          'w-70': isSidebarOpen,
          'max-md:w-0 w-20': !isSidebarOpen
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
            <h1 className=" ml-2 text-xl font-semibold text-white">JoshDev</h1>
          )}
        </Link>
        {isSidebarOpen && (
          <FiMenu onClick={toggleSidebar} className="h-6 w-6 dark:text-body" />
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
                <LinkItem
                  icon={<MdOutlineDashboard size={23} />}
                  title="Dashboard"
                  href="/"
                  disabled={isLinkDisabled}
                />
              </li>
              <li>
                <LinkItem
                  title="Settings"
                  href="/settings"
                  icon={<CiSettings size={25} />}
                  disabled={isLinkDisabled}
                ></LinkItem>
              </li>
              <li>
                <LinkItem
                  title="Profile"
                  href="/profile"
                  icon={<CiUser size={25} />}
                  disabled={isLinkDisabled}
                ></LinkItem>
              </li>
              <li>
                <ExpandMenu
                  name="Authentication"
                  icon={<GrInsecure size={25} />}
                >
                  <LinkItem title="Sign In" href="/auth/signin"></LinkItem>
                  <LinkItem title="Sign up" href="/auth/signup"></LinkItem>
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
