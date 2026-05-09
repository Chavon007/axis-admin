import { useState } from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Overview from "../main/overview";
import { Settings } from "../main/settings";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div className="bg-black min-h-screen flex justify-between h-auto">
      <section className="w-[15%] fixed top-0 left-0 h-screen">
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      <section className="w-[85%] ml-[15%] flex flex-col gap-2">
        <div className="shadow-[4px_0_10px_rgb(253_230_138/0.4)] sticky top-0 z-10 bg-black">
          <Navbar activeTab={activeTab} />
        </div>

        <main className="mt-7">
          {activeTab === "Overview" && <Overview />}
          {activeTab === "Settings" && <Settings />}
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
