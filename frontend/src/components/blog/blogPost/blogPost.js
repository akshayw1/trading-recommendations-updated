"use client";
import HotStoriesSection from "@/components/blog/hotStoriesSection/hotStoriesSection";
import styles from "./styles.module.css";
import RecentPostsSection from "@/components/blog/recentPostsSection/recentPostsSection";
import Image from "next/image";
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

export default function BlogPost({ id }) {
  const router = useRouter();
  const [postData, setPostData] = useState({
    title: "feb",
    author: "feb",
    datePost: "feb",
    text: "feb",
    imageUrl: "",
    totalViews: 1,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchUrl = `/api/blog/${id}`;
        const res = await fetch(fetchUrl, {
          method: "GET",
          headers: { "Content-type": "application/json" },
        });
        if (res.ok) {
          const resData = await res.json();
          console.log(resData.post);
          setPostData(resData.post);
        } else {
          console.log("redirect");
          //router.push(`/blog`);
        }
      } catch (error) {
        //router.push(`/blog`);
      }
    };
    fetchData();
  }, [id]); // Se agrega el id como dependencia
  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <h2>{postData.title} </h2>
        <div className={styles.postInfoBox}>
          <p>{postData.author}</p>
          <div className={styles.postDate}>
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6.50001 0C2.91016 0 0 2.91016 0 6.5C0 10.0898 2.91015 13 6.50001 13C10.0899 13 13 10.0898 13 6.5C13 2.91016 10.0898 0 6.50001 0ZM0.932384 6.5C0.932384 3.4251 3.4251 0.932378 6.50001 0.932378C9.57492 0.932378 12.0676 3.4251 12.0676 6.5C12.0676 9.57486 9.57492 12.0677 6.50001 12.0677C3.4251 12.0677 0.932384 9.57486 0.932384 6.5ZM6.99065 3.55581C6.99065 3.28479 6.77094 3.06508 6.49992 3.06508C6.2289 3.06508 6.0092 3.28479 6.0092 3.55581V6.50017C6.0092 6.63032 6.0609 6.75514 6.15293 6.84718L8.11584 8.81008C8.30748 9.00169 8.61819 9.00169 8.80983 8.81008C9.00145 8.61845 9.00145 8.30773 8.80983 8.11609L6.99065 6.29691V3.55581Z"
                fill="white"
              />
            </svg>
            <p>{postData.datePost}</p>
          </div>
        </div>
        <div className={styles.postTopImgInfoBox}>
          <div className={styles.postTopImgLeft}>
            <div className={styles.postTopText}>
              <span>{postData.totalViews}</span>
              Total Views
            </div>
            {/*
                <div className={styles.postTopText}>
                  <span>1</span>
                  Total Share
                </div>
      */}
          </div>
          <div className={styles.postTopImgRight}>
            <div className={styles.postTopText}>Listen to Article</div>
            <div className={styles.audioBox}>
              <svg
                width="15"
                height="17"
                viewBox="0 0 15 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 8.5L0.75 16.7272V0.272758L15 8.5Z" fill="white" />
              </svg>
              3:48
            </div>
          </div>
        </div>
        <Image
          className={styles.postHeroImg}
          alt="hero"
          width={500}
          height={500}
          src={postData.imageUrl}
        />
        <div className={styles.mainTextBox}>
          <div className={styles.socialLinkBox}>
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Whatsapp.png"}
            />
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Facebook.png"}
            />
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Twitter.png"}
            />
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Linkedin.png"}
            />
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Reddit.png"}
            />
            <Image
              alt="whatsapp"
              width={32}
              height={32}
              src={"/images/blog/Telegram.png"}
            />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.text }} />
        </div>
      </section>
      <aside className={styles.aside}>
        <HotStoriesSection />
      </aside>
    </main>
  );
  // return <main className={styles.main}></main>;
}
