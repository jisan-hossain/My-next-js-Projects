"use client"
import React, { useContext } from 'react';
import { CiBookmark } from 'react-icons/ci';
import { FitContext } from './FitlogContex';
import { iWorkout } from '@/type/type';
import { toast } from 'react-toastify';

const SaveForLaterBtn = ({singleCard}: {singleCard : iWorkout}) => {
        const {saveForLater, setSaveForLater} = useContext(FitContext) 
const saveLaterClick = () => {
setSaveForLater([...saveForLater , singleCard])
toast.success(`You have read "${singleCard.name}"`)
}


    
    return (
       
<button className="flex items-center gap-2 rounded-lg px-4 py-3 font-bold text-black border border-amber-50 bg-white"
onClick={()=> saveLaterClick()}>
  <CiBookmark className="w-5 h-5" /> 
  Save for later
</button>
    );
};

export default SaveForLaterBtn;