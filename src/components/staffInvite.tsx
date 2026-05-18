import useStaff from "../hooks/staffHooks";

function StaffInvite() {
  const { sendInvite, formData, error, loading, success, setFormData } =
    useStaff();
  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    sendInvite();
  };
  return (
    <div>
      <h4>Invite Staff Member</h4>
      <form onSubmit={handleInvite}>
        <label htmlFor="">
          <h5>Email</h5>
          <input
            value={formData.email}
            placeholder="staff@yourhotel.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label>
          <h5>Role</h5>
          <select
            value={formData.role}
            onChange={(e) =>
              setFormData({
                ...formData,
                role: e.target.value as "receptionist" | "owner",
              })
            }
          >
            <option value="receptionist">Receptionist</option>
            <option value="owner">Owner</option>
          </select>
        </label>
        <div>
          <h5>Permissions</h5>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.canCheckIn}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permissions: {
                    ...formData.permissions,
                    canCheckIn: e.target.checked,
                  },
                })
              }
            />
            <h6>Verify guests & check-in</h6>
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.canManageBookings}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permissions: {
                    ...formData.permissions,
                    canManageBookings: e.target.checked,
                  },
                })
              }
            />
            <h6>Manage bookings</h6>
          </label>
          <label>
            <input
              type="checkbox"
              checked={formData.permissions.canEditRooms}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permissions: {
                    ...formData.permissions,
                    canEditRooms: e.target.checked,
                  },
                })
              }
            />
            <h6>Edit room details</h6>
          </label>
          <label>
            <input
              checked={formData.permissions.canViewRevenue}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  permissions: {
                    ...formData.permissions,
                    canViewRevenue: e.target.checked,
                  },
                })
              }
            />
            <h6>View revenue data</h6>
          </label>
        </div>

        <button>{loading ? "Sending..." : "Send Invite"}</button>

        {error && <p>{error}</p>}
        {success && <p>{success}</p>}
      </form>
    </div>
  );
}

export default StaffInvite;
