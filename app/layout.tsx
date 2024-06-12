"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/common/Loader";
import Header from "@/components/Header";
import Sidebar from "@/components/common/Sidebar";
import { Providers } from "./providers";
import useLocalStorage from "@/hooks/useLocalStorage";
import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [IS_USER_TOKEN_AVAILABLE] = useLocalStorage('userToken');
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  useEffect(() => {
    const pathsCanBeAccessedWithOutToken = ['/auth/signup'];
    const isAccessibleWithOutToken = pathsCanBeAccessedWithOutToken.includes(pathname);
    if (!IS_USER_TOKEN_AVAILABLE && !isAccessibleWithOutToken) {
      router.push('/auth/signin');
    }
  }, [IS_USER_TOKEN_AVAILABLE]);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Providers>
          <div className="dark:bg-black dark:text-body">
            {loading ? (
              <Loader />
            ) : (
              <div className="flex h-screen overflow-hidden">
                <Sidebar />
                <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                  <Header
                    sidebarOpen={sidebarOpen}
                    setSidebarOpen={setSidebarOpen}
                  />
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