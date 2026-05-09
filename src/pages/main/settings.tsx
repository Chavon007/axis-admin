import { useState } from "react";
import { CreateHotel } from "../../components/createHotel";
import { SettingsButton } from "../../components/settingsbutton";
export function Settings() {
  const [activeTab, setActiveTab] = useState("Hotel Profile");
  return (
    <div>
      <section>
        <SettingsButton activeTab={activeTab} setActiveTab={setActiveTab} />
      </section>
      <section>{activeTab === "Hotel Profile" && <CreateHotel />}</section>
    </div>
  );
}
