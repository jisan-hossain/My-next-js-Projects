"use client";

import React, { useContext } from "react";
import { FitContext } from "./FitlogContex";
import { iWorkout } from "@/type/type";

interface Props {
  singleCard: iWorkout;
}

export default function SaveForLaterBtn({ singleCard }: Props) {
  const { addToSaved } = useContext(FitContext);

  return (
    <button
      onClick={() => addToSaved(singleCard)}
      className="border border-gray-700 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-xl transition text-sm cursor-pointer"
    >
      Save for later
    </button>
  );
}