export interface filterRoom {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
}

export interface RoomDetails {
  id: string;
  tempId?: string;
  isPending?: boolean;
  hotel_id: string;
  name: string;
  floor: number;
  size: string;
  maxGuests: number;
  beds: string;
  status: "available" | "occupied" | "maintenance";
  roomType: "deluxe" | "semi-deluxe" | "standard";
  amount: string;
  photo: string[];
  description: string;
  amenities: string[];
}

export interface roomCardProps extends RoomDetails {
  onEdit: (room: RoomDetails) => void;
}
