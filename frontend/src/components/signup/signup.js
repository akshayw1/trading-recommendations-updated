import Button2 from "../buttons/button2";
import styles from "./../login/styles.module.css";

export default function SignUp() {
  return (
    <main className={styles.main}>
      <h2 className={styles.h2}>Get Started</h2>
      <div className="input1">
        <input type="text" required></input>
        <label>Name</label>
      </div>
      <div className="input1">
        <input type="text" required></input>
        <label>Email</label>
      </div>
      <div className="input1">
        <input type="password" required></input>
        <label style={{ "--color1": "rgb(30,49,93)" }}>Password</label>
      </div>
      <Button2
        style1={{ "--blue1": "rgb(27,42,80)" }}
        style2={{
          fontWeight: 600,
          fontSize: "1.5rem",
          height: 46,
          paddingRight: 48,
          paddingLeft: 48,
        }}
      >
        Sign up
      </Button2>
      <div className={styles.authOptions}>
        <p>
          Already have an account? <span className="blue">Sign in</span>
        </p>
      </div>
    </main>
  );
}
