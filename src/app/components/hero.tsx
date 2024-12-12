"use client";
import Image from "next/image";
import React from "react";

export type componentProps = {
  imgPath: string;
  imgAlt: string;
  height: string;
  title: string;
  sectionToScrollTo?: string;
}

export default function Hero({imgPath, imgAlt, height, title, sectionToScrollTo}: componentProps) {
  function scrollDown() {
    if (!sectionToScrollTo) {
      const firstSection = document.querySelectorAll('section')[0];
      firstSection.scrollIntoView({behavior: 'smooth'});
    } else {
      const section = document.getElementById(sectionToScrollTo);
      if (sectionToScrollTo && section) {
        section.scrollIntoView({behavior: 'smooth'});
      }
    }
  }

  return (
    <div className="hero" id="hero" style={{height: `${height}vh`, minHeight: `${height}vh`, maxHeight: `${height}vh`}}>
      <div className="hero__bg" style={{height: `${height}vh`, minHeight: `${height}vh`, maxHeight: `${height}vh`}}>
        <Image priority={true} width="1920" height="1080" src={`${imgPath}`} alt={`${imgAlt}`}
           style={{height: `${height}vh`, minHeight: `${height}vh`, maxHeight: `${height}vh`}}/>
      </div>
      <div className="hero__content">
        <h1 className="subheader">{title}</h1>
      </div>
      <button className="hero__scroll-down" onClick={() => scrollDown()}>
        <Image priority={true} width="38" height="48" src="/svgs/arrow-down__white.svg" alt="Arrow down icon" draggable="false" />
      </button>
    </div>
  )
}
