"use client";

import React from "react";
import NavBar from "@/components/Navbar";
import { navigation } from '@/data';
import Hero from "@/components/Hero";
import Services from '@/components/Services';
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Clients from "@/components/Clients";
import ClientCompanies from "@/components/ClientsCompanies";
import ReachOut from '@/components/ReachOut';
import Footer from "@/components/Footer";
import ScrollIndicator from '@/components/ScrollIndicator';


export default function Home() {

  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={navigation} />
            <Hero />
            <About />
            <Services />
            <Experience />
            <Projects />
            <Approach /> 
            <Clients />
            <ClientCompanies />
            <ReachOut />
            <Footer />
            <ScrollIndicator />
          </div>
        </main>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
