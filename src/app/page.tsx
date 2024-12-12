"use client";
import { useEffect, useState } from "react";
import Hero from "./components/hero";
import BannerComponent from "./components/banner";
import Footer from "./components/footer";

export default function Home() {

  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return (
    <main className="page vertical home-page" id="home-page">
      <Hero
        imgPath="/img/backgrounds/hero-home.jpg"
        imgAlt="Gerecht met Pastinaak purree, wortelen, radijs, ui en linzen."
        height="100"
        title=""
      />
      {/* <BannerComponent /> */}
      <Footer />
    </main>
  )
}
