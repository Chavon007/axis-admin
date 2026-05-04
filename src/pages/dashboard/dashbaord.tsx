import { useState } from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Overview from "../main/overview";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div>
      <section>
        <Navbar activeTab={activeTab} />
      </section>

      <section>
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main>{activeTab === "Overview" && <Overview />}</main>
      </section>
    </div>
  );
}

export default Dashboard;
