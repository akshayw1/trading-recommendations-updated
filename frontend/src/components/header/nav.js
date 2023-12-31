import styles from "./styles.module.css";
import Link from "next/link";
export default function Nav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>Guide</li>
        <li>
          <Link href="/about">About us</Link>
        </li>
        <li>Contact us</li>
        <li>Donate</li>
        <li className={styles.authBox}>
          <div>
            <div>
              <div>
                <div>Log in</div>
              </div>
            </div>
            <div>
              <div>Log in</div>
            </div>
          </div>
          <div>
            <div>
              <div>Sign up</div>
            </div>
            <div>
              <div>Sign up</div>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
