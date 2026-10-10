"use client";

import React, { useContext } from "react";
import { FitContext } from "./FitlogContex";
import { iWorkout } from "@/type/type";

interface Props {
  singleCard: iWorkout;
}

export default function TodaysPlanBTN({ singleCard }: Props) {
  const { addToToday } = useContext(FitContext);

  return (
    <button
      onClick={() => addToToday(singleCard)}
      className="bg-[#C2F800] text-black font-bold px-6 py-3 rounded-xl hover:opacity-90 transition text-sm cursor-pointer"
    >
      Add to today's plan
    </button>
  );
}