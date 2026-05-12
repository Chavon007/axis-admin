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
