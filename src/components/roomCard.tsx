import type { roomCardProps } from "../types/room";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function RoomCard({
  status,
  id,
  amount,
  photo,
  roomType,
  description,
  amenities,
  onEdit,

  ...room
}: roomCardProps) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000, stopOnInteraction: false }),
  ]);

  return (
    <div className="flex flex-col h-full overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 shadow-lg hover:shadow-amber-500/10 transition-all duration-300">
      <section className="relative">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {photo.map((pic, index) => (
              <div key={index} className="flex-[0_0_100%]">
                <img
                  src={pic}
                  alt={`${roomType} photo ${index + 1}`}
                  className="h-[200px] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <span className="absolute top-3 right-3 bg-neutral-800/90 text-amber-300 text-xs px-3 py-1 rounded-full capitalize backdrop-blur">
          {status}
        </span>
      </section>

      <section className="flex flex-col gap-2 p-4 flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-amber-50">{id}</h3>
          <span className="text-xs text-gray-400">{roomType}</span>
        </div>

        <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-1">
          <span className="text-amber-400 font-semibold text-base">
            {amount}
          </span>
          <span className="text-gray-500 text-xs"> / night</span>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {amenities.map((amenity, index) => (
            <span
              key={index}
              className="text-[10px] bg-neutral-800 text-gray-300 px-2 py-1 rounded-full"
            >
              {amenity}
            </span>
          ))}
        </div>
      </section>

      <section className="p-4 pt-0 mt-auto">
        <button
          className="w-full bg-amber-500 hover:bg-amber-400 text-black text-sm font-medium py-2 rounded-lg transition"
          onClick={() =>
            onEdit({
              status,
              id,
              amount,
              photo,
              roomType,
              description,
              amenities,

              ...room,
            })
          }
        >
          Edit Room
        </button>
      </section>
    </div>
  );
}

export default RoomCard;
