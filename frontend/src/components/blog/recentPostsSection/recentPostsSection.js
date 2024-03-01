import styles from "../styles.module.css";
import Image from "next/image";
export default function RecentPostsSection() {
  return (
    <div className={styles.recentPosts}>
      <h3>Recent Posts</h3>
      <div className={`${styles.gridRecentPosts} scrollbar1`}>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.recentPostEntry}>
          <Image
            width={500}
            height={500}
            src="/images/blog/entry.png"
            alt="entry"
          ></Image>
          <div className={styles.recentPostText}>
            <p className={styles.recentPostTitle}>
              Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do, Ipsum
              Dolor Sit Amet Lorem Lipsum.
            </p>
            <div className={styles.recentPostEntryInfo}>
              <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
              <p className={styles.recentPostDate}>August 20, 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
