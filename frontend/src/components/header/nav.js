import Button1 from "../buttons/button1";
import Button2 from "../buttons/button2";
import styles from "./styles.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/guide">Guide</Link>
        </li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>Contact us</li>
        <li>Donate</li>
        <li className={styles.authBox}>
          <Link href="/auth/login">
            <Button1>Log in</Button1>
          </Link>
          <Link href="/auth/signup">
            <Button2>Sign up</Button2>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
