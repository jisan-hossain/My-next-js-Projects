"use client";

import React, { useState, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { FitContext } from "../components/context/FitlogContex";

export default function MyPlanPage() {
  const { todaysPlan, saveForLater , removeFromToday , removeFromSaved} = useContext(FitContext) || {
    todaysPlan: [],
    saveForLater: [],
    removeFromToday :[],
    removeFromSaved : [] ,
  };

  const [activeTab, setActiveTab] = useState<"today" | "saved">("today");

  const currentList = activeTab === "today" ? todaysPlan : saveForLater;

  // Total calculation for Stats Box
  const totalExercises = todaysPlan ? todaysPlan.length : 0;
  const totalMinutes = todaysPlan
    ? todaysPlan.reduce((acc: number, curr: any) => acc + (Number(curr.duration) || 0), 0)
    : 0;
  const totalCalories = todaysPlan
    ? todaysPlan.reduce((acc: number, curr: any) => acc + (Number(curr.caloriesBurned) || 0), 0)
    : 0;

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Title & Subtitle */}
        <h1 className="text-3xl font-bold uppercase tracking-wider mb-1">
          MY PLAN
        </h1>
        <p className="text-gray-400 text-sm mb-6">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Top Stats Box (Figma Style: 3 Columns Horizontal) */}
        <div className="grid grid-cols-3 gap-4 bg-[#181a1f] p-6 rounded-2xl border border-gray-800 mb-8">
          <div>
            <p className="text-gray-400 text-xs uppercase font-medium">Exercises</p>
            <h3 className="text-3xl font-bold text-[#C2F800] mt-1">
              {totalExercises}
            </h3>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase font-medium">Minutes</p>
            <h3 className="text-3xl font-bold text-white mt-1">
              {totalMinutes}
            </h3>
          </div>
          <div>
            <p className="text-gray-400 text-xs uppercase font-medium">Calories</p>
            <h3 className="text-3xl font-bold text-white mt-1">
              {totalCalories}
            </h3>
          </div>
        </div>

        {/* Tab & Sort Section */}
        <div className="flex items-center justify-between mb-6">
          {/* Tabs */}
          <div className="flex items-center bg-[#181a1f] p-1 rounded-xl border border-gray-800">
            <button
              onClick={() => setActiveTab("today")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "today"
                  ? "bg-[#272a30] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Today's Plan
            </button>
            <button
              onClick={() => setActiveTab("saved")}
              className={`px-5 py-2 text-xs font-semibold rounded-lg transition-all ${
                activeTab === "saved"
                  ? "bg-[#272a30] text-white shadow-sm"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Saved
            </button>
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <span>Sort By</span>
            <select className="bg-[#181a1f] text-white px-3 py-2 rounded-lg border border-gray-800 outline-none cursor-pointer">
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>

        {/* Tab Content (Card List or Empty State) */}
        {!currentList || currentList.length === 0 ? (
          /* Empty State */
          <div className="text-center py-20 bg-[#181a1f] rounded-2xl border border-gray-800">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-2">
              NOTHING HERE YET
            </h2>
            <p className="text-gray-400 text-sm mb-6">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="inline-block bg-[#C2F800] text-black px-6 py-3 rounded-xl font-bold text-sm uppercase hover:opacity-90 transition"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          /* Figma-style 1-Column Row List */
          <div className="flex flex-col gap-4">
            {currentList.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#181a1f] p-4 rounded-2xl border border-gray-800 gap-4"
              >
                {/* Left Side: Image & Workout Details */}
                <div className="flex items-center gap-4">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.name || "workout"}
                      width={100}
                      height={70}
                      className="w-24 h-16 rounded-xl object-cover"
                    />
                  )}
                  <div>
                    <h3 className="font-bold text-base uppercase tracking-wide">
                      {item.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.equipment || "Bodyweight"}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-gray-400 mt-1">
                      <span>⏱️ {item.duration || 0} min</span>
                      <span>🔥 {item.caloriesBurned || 0} kcal</span>
                      {item.rating && <span>⭐ {item.rating}</span>}
                    </div>
                  </div>
                </div>

                {/* Right Side: Action Buttons (Figma Style) */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end border-t border-gray-800 sm:border-t-0 pt-3 sm:pt-0">
                  <Link
                    href={`/${item.id}`}
                    className="px-4 py-2 text-xs font-semibold rounded-xl border border-gray-700 hover:bg-gray-800 transition"
                  >
                    View Details
                  </Link>
                  <button className="flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-black bg-[#C2F800] rounded-xl hover:opacity-90 transition">
                    ✓ Mark as Done
                  </button>
                 <button
    onClick={() => {
      if (activeTab === "today") {
        removeFromToday(item.id);
      } else {
        removeFromSaved(item.id);
      }
    }}
    className="text-gray-500 hover:text-red-500 px-2 text-lg cursor-pointer transition"
    title="Remove workout"
  >
    ✕
  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}