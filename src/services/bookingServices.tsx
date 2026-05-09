export const getBookings = async (token: string) => {
  const res = await fetch("", {
    method: "GET",
    credentials: "include",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  return data;
};
