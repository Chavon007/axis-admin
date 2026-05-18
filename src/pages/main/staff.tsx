import StaffInvite from "../../components/staffInvite";
import StaffList from "../../components/staffList";

// import useStaff from "../../hooks/staffHooks";

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
    <div>
      <section>
        <table>
          <thead>
            <tr>
              {staffHeader.map((h) => (
                <th key={h.title}>{h.title}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            <StaffList />
          </tbody>
        </table>
      </section>
      <section>
        <StaffInvite />
      </section>
    </div>
  );
}

export default Staff;
