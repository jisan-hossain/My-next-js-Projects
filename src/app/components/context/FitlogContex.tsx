"use client"
import { iWorkout } from '@/type/type';
import React, { createContext, ReactNode, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type FitContextValue = {
  todaysPlan: iWorkout[];
  setTodaysPlan: React.Dispatch<React.SetStateAction<iWorkout[]>>;
  saveForLater: iWorkout[];
  setSaveForLater: React.Dispatch<React.SetStateAction<iWorkout[]>>;
  removeFromToday: (id: any) => void;
  removeFromSaved: (id: any) => void;
  addToToday: (item: iWorkout) => void;
  addToSaved: (item: iWorkout) => void;
};

export const FitContext = createContext<FitContextValue>({
  todaysPlan: [],
  setTodaysPlan: () => {},
  saveForLater: [],
  setSaveForLater: () => {},
  removeFromToday: () => {},
  removeFromSaved: () => {},
  addToToday: () => {},
  addToSaved: () => {},
});

const FitLogProvider = ({children}:{children : ReactNode}) => {
    const [todaysPlan, setTodaysPlan] = useState<iWorkout[]>([]);
    const [saveForLater, setSaveForLater] = useState<iWorkout[]>([]);

    const removeFromToday = (id: any) => {
      setTodaysPlan((prev) => prev.filter((item) => item.id !== id));
      toast.info("Removed from Today's Plan!", {
        autoClose: 2000,
        hideProgressBar: false,
      });
    };

    const removeFromSaved = (id: any) => {
      setSaveForLater((prev) => prev.filter((item) => item.id !== id));
      toast.info("Removed from Saved!", {
        autoClose: 2000,
        hideProgressBar: false,
      });
    };

    const addToToday = (item: iWorkout) => {
      const isExist = todaysPlan.some((workout) => workout.id === item.id);
      if (isExist) {
        toast.warning("Already added to Today's Plan!", {
          autoClose: 2000,
          hideProgressBar: false,
        });
        return;
      }
      setTodaysPlan((prev) => [...prev, item]);
      toast.success("Added to Today's Plan!", {
        autoClose: 2000,
        hideProgressBar: false,
      });
    };

    const addToSaved = (item: iWorkout) => {
      const isExist = saveForLater.some((workout) => workout.id === item.id);
      if (isExist) {
        toast.warning("Already saved for later!", {
          autoClose: 2000,
          hideProgressBar: false,
        });
        return;
      }
      setSaveForLater((prev) => [...prev, item]);
      toast.success("Saved for later!", {
        autoClose: 2000,
        hideProgressBar: false,
      });
    };

    const shered = {
      todaysPlan, 
      setTodaysPlan, 
      saveForLater, 
      setSaveForLater,
      removeFromToday,
      removeFromSaved,
      addToToday,
      addToSaved
    };

    return (
       <FitContext.Provider value={shered}>
         <ToastContainer 
           position="top-right" 
           autoClose={2000} 
           theme="dark" 
           limit={1} 
           hideProgressBar={false}
           newestOnTop={true} 
         />
         {children}
       </FitContext.Provider>
    );
};

export default FitLogProvider;