import Image from 'next/image';
import React from 'react';
import TodaysPlanBTN from '../components/context/TodaysPlanBTN';
import SaveForLaterBtn from '../components/context/SaveForLaterBtn';


const ShowDetailsPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  let singleCard = null;

  try {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
      cache: "no-store"
    });

    // Check header content-type or if response is ok
    if (!res.ok) {
      throw new Error(`API Error: ${res.status}`);
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Response is not JSON! It might be HTML error page.");
    }

    const data = await res.json();
    singleCard = data.find((card: any) => String(card.id) === id);
  } catch (error) {
    console.error("Fetch failed:", error);
  }

  // Safety check: Data na pele loading/error box dekhabe
  if (!singleCard) {
    return (
      <div className="min-h-screen bg-[#0e1014] p-10 text-white flex items-center justify-center">
        <p className="text-red-400 font-bold">
          Data load hocche na ba API theke response asche na! Browser reload din.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e1014] p-6 text-white">
      <div className="mx-auto grid max-w-5xl gap-6 rounded-xl bg-[#17191f] p-5 md:grid-cols-2">

        <Image
          src={singleCard.image}
          alt={singleCard.name || "Workout Image"}
          width={500}
          height={500}
          className="h-full max-h-[450px] w-full rounded-lg object-cover"
        />

        <div className="space-y-5">
          <h1 className="text-3xl font-bold uppercase">
            {singleCard.name}
          </h1>

          <p className="text-sm text-gray-400">
            {singleCard.description}
          </p>

          <div className="flex gap-2">
            {singleCard.muscleGroups?.map((muscle: string) => (
              <span
                key={muscle}
                className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
              >
                {muscle}
              </span>
            ))}
          </div>

          <div className="space-y-4 rounded-lg border border-gray-800 p-4">
            <p>Equipment: {singleCard.equipment}</p>
            <p>Difficulty: {singleCard.difficulty}</p>
            <p>Sets: {singleCard.sets}</p>
            <p>Reps: {singleCard.reps}</p>
            <p>Duration: {singleCard.duration} min</p>
            <p>Calories: {singleCard.caloriesBurned} kcal</p>
            <p>Rating: ⭐ {singleCard.rating}</p>
          </div>

          <h2 className="font-bold">INSTRUCTIONS</h2>

          <ol className="list-inside list-decimal space-y-2 text-sm text-gray-400">
            {singleCard.instructions?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ol>

          <div className="flex gap-3">
            <TodaysPlanBTN singleCard={singleCard} />
            <SaveForLaterBtn singleCard={singleCard} />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ShowDetailsPage;