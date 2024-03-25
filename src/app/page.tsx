"use client"

import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs"
import MaxWidthWrapper from "@/component/MaxWidthWrapper";
import Footer from "@/component/home/Footer";
import HowToUse from "@/component/home/HowToUse";
import MainContainer from "@/component/home/MainContainer";
import WeAreOpenSourced from "@/component/home/WeAreOpenSourced";
import { useEffect } from "react";

export default function Home() {

  const { user } = useKindeBrowserClient();

  useEffect(() => {
    console.log("--", user)
  }, [user])

  return (
    <MaxWidthWrapper className="sm:p-7 sm:pb-0">
      <MainContainer />
      <HowToUse />
      <WeAreOpenSourced />
      <Footer />
    </MaxWidthWrapper>

    // hi
  );
}
