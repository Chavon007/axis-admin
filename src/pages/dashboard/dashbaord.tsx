import { useState } from "react";
import SideBar from "../../components/sidebar";
import Navbar from "../../components/navbar";
import Overview from "../main/overview";
import { Settings } from "../main/settings";
import Bookings from "../main/bookings";
import Rooms from "../main/room";
import VerifyGuest from "../main/verifyGuest";
import type { RoomDetails } from "../../types/room";
function Dashboard() {
  const [activeTab, setActiveTab] = useState("Overview");

  const [showForm, setShowForm] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<RoomDetails | null>(null);
  const [mode, setMode] = useState<"Add" | "Edit">("Add");

  const handleEdit = (room: RoomDetails) => {
    setSelectedRoom(room);
    setMode("Edit");
    setShowForm(true);
  };

  const handleAdd = () => {
    setSelectedRoom(null);
    setMode("Add");
    setShowForm(true);
  };
  return (
    <div className="bg-black min-h-screen flex justify-between h-auto">
      <section className="w-[15%] fixed top-0 left-0 h-screen">
        <SideBar activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>

      <section className="w-[85%] ml-[15%] flex flex-col gap-2">
        <div className="shadow-[4px_0_10px_rgb(253_230_138/0.4)] sticky top-0 z-10 bg-black">
          <Navbar activeTab={activeTab} onAddRoom={handleAdd} />
        </div>

        <main className="mt-7">
          {activeTab === "Overview" && <Overview />}
          {activeTab === "Settings" && <Settings />}
          {activeTab === "Bookings" && <Bookings />}
          {activeTab === "Rooms" && (
            <Rooms
              showForm={showForm}
              selectedRoom={selectedRoom}
              onEdit={handleEdit}
              mode={mode}
              setShowForm={setShowForm}
            />
          )}
          {activeTab === "Verify Guest" && <VerifyGuest />}
        </main>
      </section>
    </div>
  );
}

export default Dashboard;
