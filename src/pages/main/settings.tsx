import { useState } from "react";
import { CreateHotel } from "../../components/createHotel";
import { SettingsButton } from "../../components/settingsbutton";
export function Settings() {
  const [activeTab, setActiveTab] = useState("Hotel Profile");
  return (
    <div className=" flex justify-between">
      <section className="w-[30%] p-2 ">
        <SettingsButton activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
      <section className="w-[65%] mx-auto">
        {activeTab === "Hotel Profile" && <CreateHotel />}
      </section>
    </div>
  );
}
