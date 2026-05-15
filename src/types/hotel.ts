export interface createHotel {
  image: string | File;
  hotelName: string;
  rating: string;
  address: string;
  description: string;
  phoneNumber: string;
  email: string;
  visibility: boolean;
  acceptingBooking: boolean;
  bookingApproval: boolean;
  created_by: string;
  instantBooking: boolean;
}

export interface fetchBookings {
  id: string;
  bookingId: string;
  guest: string;
  guestEmail: string;
  guestPhone: string;
  room: string;
  roomType: string;
  amount: string;
  status: "pending" | "confirmed" | "checked-in" | "checked-out" | "cancelled";
  checkedIn: string;
  checkedOut: string;
}

export interface filterBooking {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}
