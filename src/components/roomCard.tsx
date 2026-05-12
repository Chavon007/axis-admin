import type { roomCardProps } from "../types/room";
import Slider from "react-slick";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export function RoomCard({
  status,
  roomId,
  amount,

  photo,
  roomType,
  description,
  amenities,
}: roomCardProps) {
  return (
    <div>
      <section>
        <Slider {...settings}>
          {photo.map((pic, index) => (
            <img key={index} src={pic} alt={`${roomType} photo ${index + 1}`} width={50} height={50} />
          ))}
        </Slider>
        <small>{status}</small>
      </section>

      <section>
        <h3>{roomId}</h3>
        <p>{roomType}</p>
        <p>{description}</p>
        <small>{amount}</small>
        {amenities.map((amenity, index) => (
          <small key={index}>{amenity}</small>
        ))}
      </section>

      <section>
        <button>Edit room</button>
      </section>
    </div>
  );
}

export default RoomCard;
