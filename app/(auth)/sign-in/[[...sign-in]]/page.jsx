import { SignIn } from '@clerk/nextjs'
import React from 'react'
import FancyBackground from "@/components/FancyBackground";

const Page = () => {
  return(
  <>
  <SignIn/>
  
  <main className="relative min-h-screen flex items-center justify-center">
      <FancyBackground /></main>
      </>)
 
   
  
}

export default Page
