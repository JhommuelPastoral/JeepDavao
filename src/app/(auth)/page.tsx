"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react"

export default function DesktopDesign() {
  return (
    <div className="w-sm flex justify-center items-center flex-col p-1 gap-3"> 
      <Image src={'/logo.png'} alt="logo" width={100} height={100}></Image>
      <p className="leading-5 text-center text-sm font-roboto ">JeepTa helps you find the best jeepney routes in Davao and beyond. Know exactly how to get from point A to B.</p>
      <Button className="w-full flex items-center justify-center cursor-pointer" onClick={() => signIn("google", {redirectTo: "/dashboard"})}>
        <Image src={'/google-logo.png'} alt="logo" width={20} height={20}></Image>
        Login With Google
      </Button>
      <Button className="w-full flex items-center justify-center cursor-pointer" onClick={() => signIn("github", {redirectTo: "/dashboard"})}>
        <Image src={'/github-logo.png'} alt="logo" width={20} height={20}></Image>
        Login With Github
      </Button>
    </div>
  );
}