export interface StaffListProps {
  firstName: string;
  email: string;
  role: string;
  permission: string;
  last_login: string;
  status: "Active" | "Inactive";
  action: "Revoke" | "Remove";
}

export interface StaffForm {
  email: string;
  role: "receptionist" | "owner";
  permissions: {
    canCheckIn: boolean;
    canManageBookings: boolean;
    canEditRooms: boolean;
    canViewRevenue: boolean;
  };
}
