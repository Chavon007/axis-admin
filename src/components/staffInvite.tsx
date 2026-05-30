import useStaff from "../hooks/staffHooks";

function StaffInvite() {
  const { sendInvite, formData, error, loading, success, setFormData } =
    useStaff();
  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault();
    sendInvite();
  };
  return (
    <div className="bg-neutral-900 border border-amber-100 h-auto rounded">
      <h4 className="text-xs font-lato font-bold p-3 border-b border-amber-100 text-amber-50">
        Invite Staff Member
      </h4>
      <form className="flex flex-col gap-2 pb-4" onSubmit={handleInvite}>
        <label className="flex flex-col gap-2 mt-2 w-[95%] mx-auto text-white font-lato">
          <h5 className="text-xs font-lato font-semibold text-amber-100 ml-1">
            Email
          </h5>
          <input
            className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
            type="email"
            value={formData.email}
            placeholder="staff@yourhotel.com"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </label>
        <label className="flex flex-col gap-2 mt-2 w-[95%] mx-auto text-white font-lato">
          <h5 className="text-xs font-lato font-semibold text-amber-100 ml-1">
            Role
          </h5>
          <select
            className="p-2 focus:outline-none text-white text-xs rounded bg-neutral-600 font-lato"
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

        <div className="flex flex-col gap-2 mt-2 w-[95%] mx-auto">
          <h5 className="text-xs font-lato font-semibold text-amber-100 ml-1">
            Permissions
          </h5>
          <label className="flex items-center gap-2 text-white font-lato text-xs cursor-pointer">
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
              className="accent-amber-400 w-3 h-3"
            />
            <h6>Verify guests & check-in</h6>
          </label>
          <label className="flex items-center gap-2 text-white font-lato text-xs cursor-pointer">
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
              className="accent-amber-400 w-3 h-3"
            />
            <h6>Manage bookings</h6>
          </label>
          <label className="flex items-center gap-2 text-white font-lato text-xs cursor-pointer">
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
              className="accent-amber-400 w-3 h-3"
            />
            <h6>Edit room details</h6>
          </label>
          <label className="flex items-center gap-2 text-white font-lato text-xs cursor-pointer">
            <input
              type="checkbox"
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
              className="accent-amber-400 w-3 h-3"
            />
            <h6>View revenue data</h6>
          </label>
        </div>

        <button className="w-[95%] mx-auto cursor-pointer mt-2 py-2 bg-amber-400 hover:bg-amber-500 text-neutral-900 text-xs font-lato font-bold rounded transition-colors">
          {loading ? "Sending..." : "Send Invite"}
        </button>

        {error && <p className="text-xs text-red-400 font-lato text-center">{error}</p>}
        {success && <p className="text-xs text-green-400 font-lato text-center">{success}</p>}
      </form>
    </div>
  );
}

export default StaffInvite;