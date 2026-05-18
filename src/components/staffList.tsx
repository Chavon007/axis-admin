import { useEffect } from "react";

import useStaff from "../hooks/staffHooks";

function StaffList() {
  const { fetchStaff, staffList, loading, error } = useStaff();

  useEffect(() => {
    fetchStaff();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (staffList.length === 0)
    return <p>No staff members yet. Invite one to get started.</p>;

  return (
    <>
      {staffList.map((staff) => (
        <tr key={staff.email}>
          <td>{staff.firstName}</td>
          <td>{staff.email}</td>
          <td>{staff.role}</td>
          <td>{staff.permission}</td>
          <td>{staff.last_login}</td>
          <td>{staff.status}</td>
          <td>{staff.action}</td>
        </tr>
      ))}
    </>
  );
}

export default StaffList;
