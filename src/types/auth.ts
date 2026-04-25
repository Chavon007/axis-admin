export interface LoginDetails {
  email: string;
  password: string;
}

export interface SignupDetails {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmedPassword: string;
  hotelName: string;
  policy: boolean;
  role: string;
  avatar_url?: string;
  hotelImage?: string;
}
