import type { settingProps } from "../types/settings";

const buttonCard = [
  {
    title: "Hotel Profile",
  },
  {
    title: "Booking Settings",
  },
  {
    title: "Payment Methods",
  },
  {
    title: "Account & Security",
  },
  {
    title: "Notifications",
  },
  {
    title: "Danger Zone",
  },
];

export function SettingsButton({ activeTab, setActiveTab }: settingProps) {
  return (
    <div>
      {buttonCard.map((b) => (
        <button
          key={b.title}
          className={` ${activeTab === b.title ? "text-black" : "text-gray-300"}`}
          onClick={() => setActiveTab(b.title)}
        >
          {b.title}
        </button>
      ))}
    </div>
  );
}
