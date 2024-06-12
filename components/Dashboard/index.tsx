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
  const allUsers = useQuery({ 
    queryKey: ['users'],
    queryFn: () => fetchAllUsers(token),
  })  

  console.log(allUsers.data)

  return (
    <section>
      {allUsers.isLoading ? <Loader/> : (
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <div className="col-span-12 xl:col-span-8">
          <div className="flex flex-col gap-10">
            <Table columns={USERS_TABLE(allUsers?.data?.data?.data)} data={allUsers?.data?.data?.data}/>
          </div>
        </div>
        <ChatCard />
      </div>
      )}
    </section>
  );
};

export default Dashboard;
