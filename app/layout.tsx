"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Header from "@/components/Header";
import Sidebar from "@/components/common/Sidebar";
import { Providers } from "./providers";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname, useRouter } from "next/navigation";
import useColorMode from "@/hooks/useColorMode";
import cn from "classnames";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [IS_USER_TOKEN_AVAILABLE] = useLocalStorage('userToken');
  const [colorMode] = useColorMode();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const pathsCanBeAccessedWithoutToken = ['/auth/signup'];
    const isAccessibleWithoutToken = pathsCanBeAccessedWithoutToken.includes(pathname);
    if (!IS_USER_TOKEN_AVAILABLE && !isAccessibleWithoutToken) {
      router.push('/auth/signin');
    }
  }, [IS_USER_TOKEN_AVAILABLE, pathname]);

  return (
    <html lang="en" className={cn({ 'dark': colorMode === 'dark' })}>
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="dark:bg-black dark:text-bodydark">
            {loading ? (
              <Loader />
            ) : (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                  <main>
                    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
                      {children}
                    </div>
                  </main>
                </div>
              </div>
            )}
          </div>
        </Providers>
      </body>
    </html>
  );
}
