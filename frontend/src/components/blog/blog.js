"use client";
import styles from "./styles.module.css";
import Image from "next/image";
import HotStoriesSection from "@/components/blog/hotStoriesSection/hotStoriesSection";
import RecentPostsSection from "@/components/blog/recentPostsSection/recentPostsSection";
import { useOnboardingContext } from "@/context/MyContext";
import Link from "next/link";
import { useEffect, useState, useRef, useCallback } from "react";
export default function Blog() {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  }
  const didMountRef = useRef(false);
  const { session, status } = useOnboardingContext();
  const [recentPostsList, setRecentPostsList] = useState([]);
  const [mainPostsList, setMainPostsList] = useState([]);
  const [mainPostsPage, setMainPostsPage] = useState(1);
  const [mainTotalPostsPage, setMainTotalPostsPage] = useState(0);
  const fetchMainPostsList = async () => {
    try {
      const fetchUrl = `/api/blog?&page=${mainPostsPage}`;
      setMainPostsPage((prev) => prev + 1);
      const res = await fetch(fetchUrl, {
        method: "GET",
        headers: { "Content-type": "application/json" },
      });
      if (res.ok) {
        const resData = await res.json();
        setMainTotalPostsPage(resData.totalPages);
        setMainPostsList((prev) => [...prev, ...resData.posts]);
      } else {
        // Handle error
      }
    } catch (error) {
      // Handle error
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchUrl = `/api/blog/recent-posts`;
        const res = await fetch(fetchUrl, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });
        if (res.ok) {
          const resData = await res.json();
          setRecentPostsList(resData.posts);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      }
    };

    if (didMountRef.current) {
      fetchData();
      fetchMainPostsList();
    } else {
      didMountRef.current = true;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          <RecentPostsSection recentPostsList={recentPostsList} />
        </div>
        <Link href={"/blog/create-post "}>
          <div className={styles.createBlogButton}>Create New Post</div>
        </Link>
        <div className={styles.mainEntryBox}>
          <div className={styles.entryGrid}>
            {mainPostsList.map((entry) => (
              <Link key={entry._id} href={`/blog/post/${entry._id}`}>
                <div className={styles.entry}>
                  <Image
                    width={1390}
                    height={486}
                    alt="post"
                    src={entry.imageUrl}
                  />
                  <div className={styles.categoryLabelBox}>
                    <div className={styles.categoryLabel}>{entry.tag}</div>
                  </div>
                  <p className={styles.entryTitle}>{entry.title}</p>
                  <div className={styles.entryInfo}>
                    <p className={styles.entryAuthor}>By {entry.author}</p>
                    <p className={styles.entryDate}>
                      {formatDate(entry.datePost)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          {mainPostsPage !== -1 &&
          mainTotalPostsPage !== 0 &&
          mainPostsPage - 1 < mainTotalPostsPage ? (
            <div
              onClick={fetchMainPostsList}
              className={styles.entryGridShowMore}
            >
              Load More
            </div>
          ) : null}
        </div>
      </section>
      <HotStoriesSection />
    </main>
  );
}
