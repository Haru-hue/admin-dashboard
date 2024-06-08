import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "JoshDevAdmin | Next.js Admin Dashboard",
  description: "Magnedge Admin Dashboard Assessment | Next.js Admin Dashboard",
  // other metadata
};

export default function Home() {
  return <Dashboard/>
}
