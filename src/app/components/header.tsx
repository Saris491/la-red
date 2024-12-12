"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link"
import MenuIcon from "./menu-icon";
import Image from "next/image";
import _ from "lodash";
import { compareClasses, getClientRect, getScreen, isElementInView, isMobile } from "../utils/utils";
import { usePathname, useRouter } from "next/navigation";
import axios from "axios";
import { Button } from "react-bootstrap";
import toast from "react-hot-toast";
import { User } from "@/types/types";

export default function Header() {
  const defaultClasses = ['navigation', 'is-sticky'];
  const topNav = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<User>();
  const [isHomepage, setIsHomepage] = useState<boolean>();
  const [isLoading, setIsLoading] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [menuClasses, setMenuClasses] = useState(defaultClasses);

  function resetMenuClasses() {
    setMenuClasses([...defaultClasses]);
  }

  const checkMenuClasses = () => {
    const classes = [...defaultClasses, 'non-transparent'];
    const heroEl = document.querySelector('.hero');
    if (!heroEl) return setMenuClasses(defaultClasses);
    const heroRect = getClientRect(heroEl);
    if (!heroRect) return;
    const heroInView = isElementInView(heroRect, getScreen());
    let containsClasses;
    containsClasses = compareClasses(topNav.current!.classList, defaultClasses);

    if (!_.isNil(heroInView)) {
      if (heroInView.partially || heroInView.half || heroInView.fully) {
        if (!containsClasses) {
          resetMenuClasses();
          setMenuClasses(defaultClasses);
        }
        if (showScrollDown === false) {
          setShowScrollDown(true);
        }
      } else {
        containsClasses = compareClasses(topNav.current!.classList, classes);
        if (!containsClasses) {
          setMenuClasses(classes);
        }
        if (showScrollDown === true) {
          setShowScrollDown(false);
        }
      }
    }
  }

  function checkForClassesToAdd(classes: string[]) {
    if (!classes) return;
    setIsBlack( _.includes(classes, 'non-transparent'));
  }

  function checkIfTransparent() {
    const target = document.getElementById('hero');
    if (!target) return;
    const heroRect = getClientRect(target);
    if (!heroRect) return;
    const heroInView = isElementInView(heroRect, getScreen());

    if (heroInView) {
      if (heroInView.partially || heroInView.half || heroInView.fully && !showMenu) {
        setMenuClasses(defaultClasses);
      }
    }
    if (heroInView && !heroInView.partially && !heroInView.half && !heroInView.fully && showMenu) {
      topNav?.current?.children[0]?.classList.add('non-active');
    }
    if (!showMenu) topNav?.current?.children[0]?.classList.remove('non-active');
  }

  function updateBody(showMenu: boolean) {
    if (showMenu) {
      document.body.style.top = `-${window.scrollY}px`;
      document.body.style.position = 'fixed';
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }

  const getUserInfo = async () => {
    if (user) return;
    try {
      const response: any = await axios.get('/api/users/user');
      if (response && response?.status === 200 && response?.data?.user) {
        setUser(response.data.user);
        return;
      }
      throw Error();
    } catch (error: any) {
      if (error?.response?.data?.error === "jwt expired") {
        toast.error("Je sessie is verlopen, log opnieuw in.");
        logout();
      }
    }
  };

  const logout = async () => {
    try {
      const response: any = await axios.get('/api/users/logout');
      if (response?.status === 200) {
        setUser(undefined);
        router.push('/login');
        toast.success(`Je bent nu niet meer ingelogd als ${user!.name}`);
        return;
      }
      throw Error('Log out failed');
    } catch (error: any) {
      // Silent failure
    }
  };

  useEffect(() => {
    if (!!showMenu) {
      setIsBlack(true);
    } else {
      checkForClassesToAdd(menuClasses);
    }
  }, [showMenu, menuClasses])

  useEffect(() => {
    if (!isLoading) {
      checkMenuClasses();
      checkIfTransparent();
      updateBody(showMenu);
    }
  }, [showMenu])

  useEffect(() => {
    setIsHomepage(pathname === '/');
    checkMenuClasses();
    checkIfTransparent();
  }, [pathname]);

  useEffect(() => {
    setIsHomepage(pathname === '/');
    getUserInfo();
    checkMenuClasses();
    checkIfTransparent();
    const throttleDelay = isMobile() ? 150 : 250;
    window.removeEventListener('scroll', _.throttle(checkMenuClasses, throttleDelay), true);
    window.addEventListener('scroll', _.throttle(checkMenuClasses, throttleDelay), true);

    setIsLoading(false);

    () => {
      window.removeEventListener('scroll', _.throttle(checkMenuClasses, throttleDelay), true);
    }
  }, []);

  return (
    <header ref={topNav} className={`header ${isLoading ? 'hidden' : ''}`}>
      <div className={`${menuClasses.join(' ')}`}>
        <div className="navigation__menu-btn">
          <button name="Menu button" aria-label="Click to open menu" onClick={() => setShowMenu(!showMenu)}>
            <MenuIcon menuActive={showMenu} isBlack={isBlack}/>
          </button>
        </div>
        <div className={`navigation__logo ${showMenu ? 'active' : ''}`}>
          {isHomepage ? (
            <>
              <Image priority={true} className={`${isBlack ? 'hidden' : ''}`} width="250" height="80" src="/svgs/logo.svg" alt="Bruur Culinair logo" draggable="false" />
              <Image priority={true} className={`${!isBlack ? 'hidden' : ''}`} width="250" height="80" src="/svgs/logo__black.svg" alt="Black Bruur Culinair logo" draggable="false" />
            </>
          ) : (
            <Link href="/" aria-label="Link to home" onClick={(() => {setShowMenu(false);})}>
              <Image priority={true} className={`${isBlack ? 'hidden' : ''}`} width="250" height="80" src="/svgs/logo.svg" alt="Bruur Culinair logo" draggable="false" />
              <Image priority={true} className={`${!isBlack ? 'hidden' : ''}`} width="250" height="80" src="/svgs/logo__black.svg" alt="Black Bruur Culinair logo" draggable="false" />
            </Link>
          )}
        </div>
        <nav className={`navigation__social ${showMenu || isBlack ? 'active' : ''}`}>
          {!user && (
            <>
              <a href="https://www.instagram.com/bruur.culinair/" className="icon-btn" 
                aria-label="Link to Instagram profile" target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/BRUUR-Culinair-103068201267850/" className="icon-btn not-mobile" aria-label="Link to LinkedIn profile" target="_blank" rel="noopener">
                <i className="fab fa-facebook-square"></i>
              </a>
            </>
          )}

          {user && (
            <Button className={`logout-btn ${(showMenu || isBlack) ? '' : 'white'}`} aria-label="Logout button"
              onClick={logout} variant="primary" size="sm">
              Uitloggen
            </Button>
          )}
        </nav>
      </div>
  
      <div className={`menu-overlay ${showMenu ? 'active' : ''}`}>
        <nav className="menu">
          <ul className="menu__list" data-offset="10">
            <li className="menu__list-item" data-offset="16">
              <Link className="text-link" href="/" onClick={() => setShowMenu(false)}>
                Home
              </Link>
            </li>
            <li className="menu__list-item" data-offset="16">
              <Link className="text-link" href="/activiteiten" onClick={() => setShowMenu(false)}>
                Projects
              </Link>
            </li>
            <li className="menu__list-item" data-offset="16">
              <Link className="text-link" href="/over-ons" onClick={() => setShowMenu(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
