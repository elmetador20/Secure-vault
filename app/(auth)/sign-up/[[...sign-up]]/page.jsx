import { SignUp } from '@clerk/nextjs'
import React from 'react'
import FancyBackground from "@/components/FancyBackground";
const page = () => {
  return(
    <>
    <SignUp/>
    
    <main className="relative min-h-screen flex items-center justify-center">
        <FancyBackground /></main>
        </>)
   
     
}

export default page
