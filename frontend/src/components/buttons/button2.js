import styles from "./styles.module.css";
export default function Button2({ children, style = {} }) {
  return (
    <div style={style} className={styles.button2}>
      <div>
        <div>{children}</div>
      </div>
      <div>
        <div>{children}</div>
      </div>
    </div>
  );
}
