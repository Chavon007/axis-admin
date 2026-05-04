import { useState } from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";

function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  return (
    <div>
      <section>
        <Navbar activeTab={activeTab} />
      </section>

      <section>
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />

        <main>
            
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
