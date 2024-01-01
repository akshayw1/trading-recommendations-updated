import Button1 from "../buttons/button1";
import styles from "./styles.module.css";

export default function Login() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>
        Sign in to <span className="blue">BTCUSDPERP</span>
      </h2>
      <div className="input1">
        <input type="text" required></input>
        <label>Email</label>
      </div>
      <div className="input1">
        <input type="password" required></input>
        <label style={{ "--color1": "rgb(30,49,93)" }}>Password</label>
      </div>
      <Button1
        style1={{ "--blue1": "rgb(27,42,80)" }}
        style2={{
          fontWeight: 600,
          fontSize: "1.5rem",
          height: 46,
          paddingRight: 48,
          paddingLeft: 48,
        }}
      >
        Log in
      </Button1>
      <div className={styles.authOptions}>
        <p className="blue">Reset Password</p>
        <p>
          No Account? <span className="blue">Create One</span>
        </p>
      </div>
    </main>
  );
}
