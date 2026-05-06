import { useState } from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Overview from "../main/overview";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="bg-black min-h-screen  flex justify-between h-auto">
      <section className="w-[15%] ">
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      <section className="w-[85%]  flex flex-col gap-2">
        <div className="shadow-[4px_0_10px_rgb(253_230_138/0.4)]">
          <Navbar activeTab={activeTab} />
        </div>

        <main className="mt-7">{activeTab === "Overview" && <Overview />}</main>
      </section>
    </div>
  );
}

export default Dashboard;
