"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import Button1 from "../buttons/button1";
import Button2 from "../buttons/button2";
import { useState } from "react";
import { useOnboardingContext } from "@/context/MyContext";
import { signOut } from "next-auth/react";

export default function Aside() {
  const { session, status, menuOpen, setMenuOpen, hideAside } =
    useOnboardingContext();
  const [menuOption, setMenuOption] = useState(false);

  return (
    <>
      <Image
        onClick={() => setMenuOpen(!menuOpen)}
        className={`${styles.mobile} ${styles.menuIcon}`}
        alt="menu"
        width={256}
        height={256}
        src="/images/nav/menu-svgrepo-com.png"
      />
      <div
        id="asideMenu"
        className={`${menuOpen ? "menuIsOpen" : ""} ${styles.overlay} ${
          styles.mobile
        }`}
      ></div>
      <aside
        id="asideMenu"
        className={`${menuOpen ? "menuIsOpen" : ""} ${
          hideAside ? styles.onTable : ""
        } ${styles.aside} `}
      >
        <Link className={styles.desktop} href="/">
          <Image
            alt="logo"
            width={198}
            height={122}
            src="/images/Logo.png"
          ></Image>
        </Link>
        <Image
          onClick={() => setMenuOpen(false)}
          className={styles.mobile}
          alt="close"
          width={256}
          height={256}
          src="/images/nav/close-svgrepo-com.png"
        />
        <div className={`${styles.menuOptions} ${styles.mobile}`}>
          <Button1
            onClick={() => setMenuOption(false)}
            style2={{
              fontWeight: 600,
              fontSize: "1.5rem",
              height: 46,
            }}
            width="187.5px"
            borderSize="3px 2px 3px 3px"
            borderRadius="0"
          >
            Crypto
          </Button1>
          <Button1
            onClick={() => setMenuOption(true)}
            style2={{
              fontWeight: 600,
              fontSize: "1.5rem",
              height: 46,
            }}
            width="187.5px"
            borderRadius="0"
            borderSize="3px 3px 3px 2px"
          >
            Menu
          </Button1>
        </div>
        <ul
          className={`${styles.mobile} ${styles.navMenu} ${
            menuOption ? styles.menuSelected : ""
          }`}
        >
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/guide">
              Guide
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/about">
              About us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/contactus">
              Contact us
            </Link>
          </li>
          <li>
            <Link onClick={() => setMenuOpen(false)} href="/donate">
              Donate
            </Link>
          </li>
        </ul>
        <ul className={`${!menuOption ? styles.menuSelected : ""}`}>
          <li className={styles.blue}>Futures & Options OI</li>
          <li>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/bitcoin"
            >
              
              Bitcoin
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/ethereum"
            >
             
              Ethereum
            </Link>
          </li>
          <li className={styles.blue}>Futures OI</li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/cosmos"
            >
            
              Sei
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/avalaunch"
            >
             
              Xai
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/solona"
            >
            
              Solana
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/injective"
            >
             
              Injective
            </Link>
          </li>
          <li className={styles.white}>
            <Link
              onClick={() => setMenuOpen(false)}
              className={styles.white}
              href="/user/sui"
            >
             
              Sui
            </Link>
          </li>
          {session && session.user.admin ? (
            <li>
              <Link
                onClick={() => setMenuOpen(false)}
                className={styles.white}
                href="/admin/allusers "
              >
                <div>
                  <svg
                    className={styles.fill}
                    fill="white"
                    viewBox="0 0 1920 1920"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M276.941 440.584v565.722c0 422.4 374.174 625.468 674.71 788.668l8.02 4.292 8.131-4.292c300.537-163.2 674.71-366.268 674.71-788.668V440.584l-682.84-321.657L276.94 440.584Zm682.73 1479.529c-9.262 0-18.523-2.372-26.993-6.89l-34.9-18.974C588.095 1726.08 164 1495.906 164 1006.306V404.78c0-21.91 12.65-41.788 32.414-51.162L935.727 5.42c15.134-7.228 32.866-7.228 48 0l739.313 348.2c19.765 9.374 32.414 29.252 32.414 51.162v601.525c0 489.6-424.207 719.774-733.779 887.943l-34.899 18.975c-8.47 4.517-17.731 6.889-27.105 6.889Zm467.158-547.652h-313.412l-91.595-91.482v-83.803H905.041v-116.78h-83.69l-58.503-58.504c-1.92.113-3.84.113-5.76.113-176.075 0-319.285-143.21-319.285-319.285 0-176.075 143.21-319.398 319.285-319.398 176.075 0 319.285 143.323 319.285 319.398 0 1.92 0 3.84-.113 5.647l350.57 350.682v313.412Zm-266.654-112.941h153.713v-153.713L958.462 750.155l3.953-37.27c1.017-123.897-91.595-216.621-205.327-216.621S550.744 588.988 550.744 702.72c0 113.845 92.612 206.344 206.344 206.344l47.21-5.309 63.811 63.7h149.873v116.78h116.781v149.986l25.412 25.299Zm-313.4-553.57c0 46.758-37.949 84.706-84.706 84.706-46.758 0-84.706-37.948-84.706-84.706s37.948-84.706 84.706-84.706c46.757 0 84.706 37.948 84.706 84.706"
                        fillRule="white"
                      ></path>
                    </g>
                  </svg>
                </div>
                Verify user
              </Link>
            </li>
          ) : null}
        </ul>
        {session ? null : (
          <div className={`${styles.authBox} ${styles.mobile}`}>
            <Link onClick={() => setMenuOpen(false)} href="/auth/login">
              <Button1
                style2={{
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  height: 46,
                }}
                borderSize={3}
              >
                Log in
              </Button1>
            </Link>
            <Link onClick={() => setMenuOpen(false)} href="/auth/signup">
              <Button2
                style2={{
                  fontWeight: 600,
                  fontSize: "1.5rem",
                  height: 46,
                }}
              >
                Sign up
              </Button2>
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
