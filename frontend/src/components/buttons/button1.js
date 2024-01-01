import styles from "./styles.module.css";
export default function Button1({ children, style1 = {}, style2 = {} }) {
  return (
    <div style={style1} className={styles.button1}>
      <div>
        <div style={style2}>
          <div>
            <p>{children}</p>
          </div>
        </div>
      </div>
      <div>
        <div style={style2}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
}
