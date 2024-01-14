import styles from "./styles.module.css";
import Image from "next/image";
export default function Blog() {
  return (
    <main className={styles.main}>
      <h2 className="blue">Recently shipped</h2>
      <p>
        We’re releasing new updates nearly every week. Stay on top of them here
        with all our latest company news and views.
      </p>
      <div className={styles.entry}>
        <Image
          width={1390}
          height={486}
          alt="blog hero"
          src="/images/blog/blog hero.png"
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className={styles.entryGrid}>
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>{" "}
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>{" "}
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>{" "}
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>{" "}
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>{" "}
        <div className={styles.entry}>
          <Image
            width={1390}
            height={486}
            alt="blog hero"
            src="/images/blog/entry.png"
          />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
      </div>
    </main>
  );
}
