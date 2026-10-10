

"use client"
import { iWorkout } from '@/type/type';
import React, { createContext, ReactNode, useState } from 'react';

type FitContextValue = {
  todaysPlan: iWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<iWorkout[]>>;
  saveForLater: iWorkout[];
  setSaveForLater: React.Dispatch<React.SetStateAction<iWorkout[]>>;
  removeFromToday: (id: iWorkout['id']) => void;
  removeFromSaved: (id: iWorkout['id']) => void;
};

export const FitContext = createContext<FitContextValue>({
  todaysPlan: [],
  setTodaysPlan: () => undefined,
  saveForLater: [],
  setSaveForLater: () => undefined,
  removeFromToday: () => undefined,
  removeFromSaved: () => undefined,
});

const FitLogProvider = ({children}:{children : ReactNode}) => {
    const [todaysPlan, setTodaysPlan] = useState<iWorkout[]>([]);
    const [saveForLater, setSaveForLater] = useState<iWorkout[]>([]);

    // ১. Today's Plan থেকে কার্ড ডিলিট করার ফাংশন
    const removeFromToday = (id: iWorkout['id']) => {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
    };

    // ২. Saved Plan থেকে কার্ড ডিলিট করার ফাংশন
    const removeFromSaved = (id: iWorkout['id']) => {
      setSaveForLater((prev) => prev.filter((item) => item.id !== id));
    };

    // ৩. এই ফাংশন দুটোও আমরা অন্য পেজে ব্যবহারের জন্য shered এ পাঠিয়ে দিলাম
    const shered = {
      todaysPlan, 
      setTodaysPlan, 
      saveForLater, 
      setSaveForLater,
      removeFromToday,
      removeFromSaved
    };

    return (
       <FitContext.Provider value={shered}> {children} </FitContext.Provider>
    );
};

export default FitLogProvider;