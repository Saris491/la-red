"use client";
import { useEffect, useState } from "react";

export default function Home() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="bg-black flex w-full h-full items-center justify-center" id="home-page">
      RED
    </main>
  )
}
