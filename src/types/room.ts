export type roomCardProps = {
  status: string;
  roomId: string;
  roomType: string;
  amount: string;
  photo: string[];
  description: string;
  amenities: string[];
};

export interface filterRoom {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export interface RoomDetails {
  details: roomCardProps[];
  hotel_id: string;
  id: string;
  name: string;
  floor: number;
  size: string;
  maxGuests: number;
  beds: string;
}
