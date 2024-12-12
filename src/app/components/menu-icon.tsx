"use client";
import React, { useEffect } from "react"

type Props = {
  menuActive: boolean;
  isBlack: boolean;
};

export default function MenuIcon({menuActive, isBlack}: Props) {
  interface SVGElement extends Element {
    beginElement(): SVGElement;
  }

  function beginAnimation(el: SVGElement, timeout: number) {
    setTimeout(() => {
      el.beginElement();
    }, timeout);
  }

  useEffect(() => {
    const icon = document.getElementById('a1') as unknown as SVGElement;
    if (icon) {
      beginAnimation(icon, 900);
    }
  }, []);

  return (
    <svg className={`${menuActive ? 'active' : ''} ${isBlack ? 'black' : ''}`} width="20px" height="20px" viewBox="0 0 385 193" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <defs>
        <linearGradient id="left-to-right">
          <stop offset="0" stopColor="#ffffff">
            <animate id="a1" dur=".25s" attributeName="offset" fill="freeze" from="0" to="1" begin="indefinite"/>
          </stop>
          <stop offset="0" stopColor="transparent">
            <animate dur=".25s" attributeName="offset" fill="freeze" from="0" to="1" begin="a1.repeat"/>
          </stop>
        </linearGradient>
      </defs>
      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="menu-icon">
          <path className="line" fill="url(#left-to-right)" strokeWidth="1" opacity="1" d="M12.03,24.303 L372.939,24.303 C379.58,24.303 384.969,18.913 384.969,12.273 C384.969,5.632 379.579,0.243 372.939,0.243 L12.03,0.243 C5.389,0.243 0,5.633 0,12.273 C0,18.913 5.39,24.303 12.03,24.303 Z" id="path-1"></path>
          <path className="line" fill="url(#left-to-right)" strokeWidth="1" opacity="1" d="M372.939,84.455 L12.03,84.455 C5.389,84.455 0,89.845 0,96.485 C0,103.125 5.39,108.515 12.03,108.515 L372.939,108.515 C379.58,108.515 384.969,103.125 384.969,96.485 C384.969,89.845 379.58,84.455 372.939,84.455 Z" id="path-2"></path>
          <path className="line" fill="url(#left-to-right)" strokeWidth="1" opacity="1" d="M372.939,168.667 L132.333,168.667 C125.692,168.667 120.303,174.057 120.303,180.697 C120.303,187.338 125.693,192.727 132.333,192.727 L372.939,192.727 C379.58,192.727 384.969,187.337 384.969,180.697 C384.97,174.056 379.58,168.667 372.939,168.667 Z" id="path-3"></path>
        </g>
      </g>
    </svg>
  )
}