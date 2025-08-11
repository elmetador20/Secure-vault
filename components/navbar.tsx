"use client"

import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'

import { LayoutDashboard } from 'lucide-react';
const Header = () => {
  const path = usePathname();


  if (path.includes("/editor")) {
    return null;
  }


  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap">
      <div className="backdrop-blur-md bg-blue-800/20 border border-black/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20">
          <Image
            src="/password.png"
            alt="pixxel logo"
            className="min-w-10 object-cover"
            width={46}
            height={4}
            priority
          />
        </Link>

        {path === "/" && (
          <div className='hidden md:flex space-x-6'>

            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>


          </div>
        )
        }
      
        <div className='flex itmes-centre gap-3 ml-10 md:ml-20'>
        
            
            <Link href="/dashboard">
              <Button  className='gap-5 h-10 w-22 text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer' >
                
                <span className="hidden md:flex">Dashboard</span>
              </Button></Link>
               <Link href="/sign-in">
              <Button  className='gap-5 h-10 w-22 text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer' >
                
                <span className="hidden md:flex">SignIn</span>
              </Button>
              </Link>
               <Link href="/sign-up">
              <Button  className='gap-5 h-10 w-22 text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer'>
                
                <span className="hidden md:flex">SignUp</span>
              </Button>

            </Link>
           

        </div>
      
      
      </div>
    </header>
  );
};

export default Header;