"use client";
import Image from "next/image";
import styles from "./styles.module.css";
import Link from "next/link";
import { useOnboardingContext } from "@/context/MyContext";

export default function Footer() {
  const { session, status, setMenuOpen, menuOpen, hideAside, onTable } =
    useOnboardingContext();

  return (
    <footer className={`${hideAside ? styles.onTable : ""} ${styles.footer}`}>
      <div className={styles.footerUl}>
        <Image
          alt="logo"
          width={198}
          height={122}
          src="/images/Logo.png"
        ></Image>
        <ul>
          <li>
            <Link href="/disclaimer">Disclaimer</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/careers">Careers</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms">Terms & Condition</Link>
          </li>
          <li>
            <Link href="https://twitter.com/" target="_blank">
              Twitter
            </Link>
          </li>
        </ul>
      </div>
      <div>Made with love</div>
    </footer>
  );
}
