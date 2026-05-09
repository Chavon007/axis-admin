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
  bookingId: string;
  guest: string;
  room: string;
  nights: string;
  amount: string;
  status: string;
  action: string;
  checkedIn: string;
  checkedOut: string;
}

export interface filterBooking {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}
