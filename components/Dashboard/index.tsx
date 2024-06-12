"use client";
import { ChatCard } from "../Cards";
import { useQuery } from "@tanstack/react-query";
import { fetchAllUsers } from "@/app/apis/user";
import useLocalStorage from "@/hooks/useLocalStorage";
import Table from "../Tables";
import { USERS_TABLE } from "../constants";
import Loader from "../common/Loader";

const Dashboard = () => {
  const [token] = useLocalStorage("userToken");
  const [loggedInUser] = useLocalStorage<any>("localUser");
  const allUsers = useQuery({
    queryKey: ['users'],
    queryFn: () => fetchAllUsers(token),
  });

  // Check if the logged-in user's role is not ADMIN
  if (loggedInUser?.role !== 'ADMIN') {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold">You do not have access to this page.</p>
      </div>
    );
  }

  return (
    <section>
      {allUsers.isLoading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <div className="col-span-12 xl:col-span-8">
            <div className="flex flex-col gap-10">
              <Table columns={USERS_TABLE(allUsers?.data?.data?.data)} data={allUsers?.data?.data?.data} />
            </div>
          </div>
          <ChatCard />
        </div>
      )}
    </section>
  );
};

export default Dashboard;