import { useEffect } from "react";
import useStaff from "../hooks/staffHooks";

function StaffList() {
  const { fetchStaff, staffList, loading, error } = useStaff();

  useEffect(() => {
    fetchStaff();
  }, []);

  if (loading) return <p className="text-xs text-neutral-400 font-lato py-6 text-center">Loading...</p>;
  if (error) return <p className="text-xs text-red-400 font-lato py-6 text-center">{error}</p>;
  if (staffList.length === 0)
    return <p className="text-xs text-neutral-400 font-lato py-6 text-center">No staff members yet. Invite one to get started.</p>;

  return (
    <>
      {staffList.map((staff) => (
        <tr key={staff.email} className="border-b border-neutral-800 hover:bg-neutral-800 transition-colors">
          <td className="text-xs text-amber-50 font-lato px-4 py-3">{staff.firstName}</td>
          <td className="text-xs text-neutral-400 font-lato px-4 py-3">{staff.email}</td>
          <td className="text-xs text-neutral-400 font-lato px-4 py-3 capitalize">{staff.role}</td>
          <td className="text-xs text-neutral-400 font-lato px-4 py-3">{staff.permission}</td>
          <td className="text-xs text-neutral-400 font-lato px-4 py-3">{staff.last_login}</td>
          <td className="text-xs text-neutral-400 font-lato px-4 py-3">{staff.status}</td>
          <td className="text-xs text-amber-400 font-lato px-4 py-3">{staff.action}</td>
        </tr>
      ))}
    </>
  );
}

export default StaffList;