import { useState } from "react";
import type { StaffListProps, StaffForm } from "../types/staff";

function useStaff() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState<StaffForm>({
    email: "",
    role: "owner",
    permissions: {
      canCheckIn: false,
      canManageBookings: false,
      canEditRooms: false,
      canViewRevenue: false,
    },
  });

  const [staffList, setStaffList] = useState<StaffListProps[]>([]);
  const fetchStaff = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("", {
        method: "GET",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        setError("Failed to fetch staffs");
        return;
      }
      return setStaffList(data);
    } catch (err) {
      setError("Failed to connect");
    } finally {
      setLoading(false);
    }
  };

  const sendInvite = async () => {
    setLoading(true);
    setError("");
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email) {
      setError("Please fill all required fields");
      return;
    }
    if (!regex.test(formData.email)) {
      setError("Please use a proper email");
      setLoading(false);
      return;
    }
    try {
      const res = await fetch("", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ formData }),
      });

      const data = await res.json();
      if (!res.ok) {
        setError("Failed to send data");
        return;
      }
      setFormData(data);
      setFormData({
        email: "",
        role: "owner",
        permissions: {
          canCheckIn: false,
          canEditRooms: false,
          canManageBookings: false,
          canViewRevenue: false,
        },
      });
      setSuccess("Invite sent successfully");
      return;
    } catch (err) {
      setError("Can't send data now");
    } finally {
      setLoading(false);
    }
  };

  return {
    fetchStaff,
    loading,
    staffList,
    error,
    success,
    sendInvite,
    formData,
    setFormData,
  };
}

export default useStaff;
