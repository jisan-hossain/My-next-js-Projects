"use client"
import React, { useContext } from 'react';
import { FitContext } from './FitlogContex';
import { iWorkout } from '@/type/type';
import { toast } from 'react-toastify';

const TodaysPlanBTN = ({singleCard}:{singleCard : iWorkout}) => {

    const {todaysPlan, setTodaysPlan} = useContext(FitContext)

    const planHandallClick = () => {
    setTodaysPlan([...todaysPlan , singleCard])
toast.success(`You have read "${singleCard.name}"`)
    }
    return (
        <div>
               <button className="rounded-lg bg-lime-400 px-4 py-3 font-bold text-black"
               onClick={()=> planHandallClick()}>Add to today's plan  </button>
        </div>
    );
};

export default TodaysPlanBTN;