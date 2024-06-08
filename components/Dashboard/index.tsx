import { ChatCard } from "../Cards";
import DataCard from "../Cards/DataCard";
import { AreaChart, SimpleBar } from "../Charts";
import BrandTable from "../Tables/BrandTable";
import Maps from "../common/Maps";

const Dashboard = () => {
  return (
    <section>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5">
        <DataCard name="sales" amount={12699} />
        <DataCard name="orders" amount={34600} />
        <DataCard name="customers" amount={400} />
      </div>
      <div className="space-y-5 py-5">
        <AreaChart />
        <SimpleBar />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <Maps />
        <div className="col-span-12 xl:col-span-8">
          <BrandTable />
        </div>
        <ChatCard />
      </div>
    </section>
  );
};

export default Dashboard;