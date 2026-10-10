
import { iWorkout } from "@/type/type";
import Image from "next/image";
import Link from "next/link";

const Card = ({ card }: { card: iWorkout }) => {
  return (
    <Link href={`/${card.id}`}>
      <div className="overflow-hidden rounded-xl border border-gray-800 bg-[#17191f] text-white">
        <Image
          src={card.image}
          alt={card.name}
          height={300}
          width={400}
          className="h-40 w-full object-cover"
        />

        <div className="space-y-3 p-3">
          <div className="flex flex-wrap gap-2">
            {card.muscleGroups.map((muscle) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-2 py-1 text-xs font-bold text-black"
              >
                {muscle.toUpperCase()}
              </span>
            ))}
          </div>

          <h2 className="font-bold uppercase">
            {card.name}
          </h2>

          <p className="text-xs text-gray-400">
            {card.equipment}
          </p>

          <hr className="border-gray-800" />

          <div className="flex items-center justify-between gap-2 text-xs text-gray-400">
            <span>◷ {card.duration} min</span>
            <span>🔥 {card.caloriesBurned} kcal</span>
            <span>☆ {card.rating}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;