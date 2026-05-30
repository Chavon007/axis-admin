import StaffInvite from "../../components/staffInvite";
import StaffList from "../../components/staffList";

const staffHeader = [
  {
    title: "Name",
  },
  {
    title: "Email",
  },
  {
    title: "Role",
  },
  {
    title: "Permissions",
  },
  {
    title: "Last Login",
  },
  {
    title: "Status",
  },
  {
    title: "Action",
  },
];
function Staff() {
  return (
    <div className="flex justify-between w-[95%] p-3 mx-auto">
      <section className="w-[70%] py-2  h-50 border border-amber-100 ">
        <table className="w-full table-fixed">
          <thead className="border-b border-amber-100  text-base font-montserra font-semibold text-neutral-400">
            <tr className="">
              {staffHeader.map((h) => (
                <th className="text-left px-4 py-2 text-xs" key={h.title}>
                  {h.title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="">
            <StaffList />
          </tbody>
        </table>
      </section>
      <section className=" w-[27%]">
        <StaffInvite />
      </section>
    </div>
  );
}

export default Staff;
