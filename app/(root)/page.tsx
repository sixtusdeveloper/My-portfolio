"use client"; // Ensure the component is a client-side component

import React from "react";
import NavBar from "@/components/Navbar";
import { navigation } from '@/data';
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import Services from '@/components/Services';
import Footer from "@/components/Footer";
import { SignedIn, SignedOut, RedirectToSignIn, useUser } from "@clerk/nextjs";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects";

export default function Home() {

  return (
    <>
      <SignedIn>
        <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
          <div className="max-w-7xl w-screen">
            <NavBar navigation={navigation} />
            <Hero />
            <Grid />
            <Services />
            <Experience />
            <Projects />
            <Approach /> 
            <Footer />
          </div>
        </main>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </>
  );
}
