
"use client";

import React, { useContext, useState } from 'react';
import Link from 'next/link';
import { FitContext } from '../components/context/FitlogContex';
import MyPlandesine from '../components/MyPlandesine';


export default function MyPlanPage() {

  const {todaysPlan , saveForLater} = useContext(FitContext)
 console.log(todaysPlan, 'todaysPlan', saveForLater , "save for later")

  return (
   <div>
    <MyPlandesine></MyPlandesine>

   </div>
  );
}