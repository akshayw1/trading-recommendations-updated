"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import HotStoriesSection from "@/components/blog/hotStoriesSection/hotStoriesSection";
import RecentPostsSection from "@/components/blog/recentPostsSection/recentPostsSection";
import { useOnboardingContext } from "@/context/MyContext";
import Link from "next/link";
export default function Blog() {
  const { session, status } = useOnboardingContext();

  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <div className={styles.top}>
          <div className={styles.entryHero}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/blog hero.png"
            />
            <h3>
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do.
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore. Lorem Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>
            <div className={styles.entryHeroInfo}>
              <p>By The Author</p>
              <p>August 20, 2022</p>
            </div>
          </div>
          <RecentPostsSection />
        </div>
        {session ? (
          <Link href={"/blog/create-post "}>
            <div className={styles.createBlogButton}>Create New Post</div>
          </Link>
        ) : null}
        <div className={styles.entryGrid}>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entry}>
            <Image
              width={1390}
              height={486}
              alt="blog hero"
              src="/images/blog/entry.png"
            />
            <div className={styles.categoryLabelBox}>
              <div className={styles.categoryLabel}>Technology</div>
            </div>
            <p className={styles.entryTitle}>
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </p>
            <div className={styles.entryInfo}>
              <p className={styles.entryAuthor}>By Tracey Wilson</p>
              <p className={styles.entryDate}>August 20, 2022</p>
            </div>
          </div>
          <div className={styles.entryGridShowMore}>Load More</div>
        </div>
      </section>
      <HotStoriesSection />
    </main>
  );
}
