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
