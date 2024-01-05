"use client";
import Button1 from "../buttons/button1";
import Button2 from "../buttons/button2";
import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { useOnboardingContext } from "@/context/MyContext";
import { signOut } from "next-auth/react";
export default function Nav() {
  const { session, status } = useOnboardingContext();
  return (
    <nav className={styles.nav}>
      <ul className={styles.desktop}>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>
          <Link href="/contactus">Contact us </Link>
        </li>
        <li>
          <Link href="/donate">Donate</Link>
        </li>
        {status === "authenticated" ? (
          <li className={styles.authBox}>
            <Image
              className={styles.userIcon}
              alt="user"
              width={32}
              height={32}
              src="/images/nav/user-identity-svgrepo-com.png"
            />
            <Button1 onClick={signOut}>Log out</Button1>
          </li>
        ) : (
          <li className={styles.authBox}>
            <Link href="/auth/login">
              <Button1>Log in</Button1>
            </Link>
            <Link href="/auth/signup">
              <Button2>Sign up</Button2>
            </Link>
          </li>
        )}
      </ul>
      <ul className={styles.mobile}>
        <li></li>
        <li>
          <Image
            alt="logo"
            width={198}
            height={122}
            src="/images/Logo.png"
          ></Image>
        </li>
        <li>
          <Image
            className={styles.mobile}
            alt="logo"
            width={198}
            height={122}
            src="/images/nav/user-identity-svgrepo-com.png"
          ></Image>
        </li>
      </ul>
    </nav>
  );
}
