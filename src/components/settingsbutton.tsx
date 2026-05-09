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
    <div className="w-50 mx-auto flex flex-col border border-amber-100">
      {buttonCard.map((b) => (
        <button
          key={b.title}
          className={`cursor-pointer w-full last:border-b-0 hover:bg-neutral-800 border-b border-b-amber-100 text-xs md:text-sm font-montserra text-white font-semibold p-3 ${activeTab === b.title ? "bg-neutral-800" : ""}`}
          onClick={() => setActiveTab(b.title)}
        >
          {b.title}
        </button>
      ))}
    </div>
  );
}
