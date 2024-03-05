"use client";
import HotStoriesSection from "@/components/blog/hotStoriesSection/hotStoriesSection";
import styles from "./styles.module.css";
import RecentPostsSection from "@/components/blog/recentPostsSection/recentPostsSection";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { useRouter } from "next/navigation";

export default function BlogPost({ id }) {
  const { speak, voices, speaking, cancel } = useSpeechSynthesis();
  const router = useRouter();
  const didMountRef = useRef(false);
  const [voice, setVoice] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  useEffect(() => {
    if (voices.length > 0) {
      setVoice(voices[2]);
    }
  }, [speak, voices]);
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (speaking) {
      const timer = setInterval(() => {
        setCurrentTime((prevTime) => prevTime + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [speaking]);
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
          setPostData(resData.post);
        } else {
          router.push(`/blog`);
        }
      } catch (error) {
        router.push(`/blog`);
      }
    };

    if (didMountRef.current) {
      fetchData();
    } else {
      didMountRef.current = true;
    }
  }, [id]);
  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };
  if(postData)
  return (
    <main className={styles.main}>
      <section className={styles.mainSection}>
        <h2>{postData.title} </h2>
        <div className={styles.postInfoBox}>
          <p>by {postData.author}</p>
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
            <div
              onClick={() => {
                if (speaking) {
                  cancel();
                } else {
                  setCurrentTime(0);
                  speak({
                    text: postData.text,
                    voice,
                  });
                }
              }}
              className={styles.audioBox}
            >
              {speaking ? (
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"
                      fill="#ffffff"
                    />
                  </g>
                </svg>
              ) : (
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 8.5L0.75 16.7272V0.272758L15 8.5Z"
                    fill="white"
                  />
                </svg>
              )}
              <p>{formatTime(currentTime)}</p>
            </div>
          </div>
        </div>
        <div className={styles.postHeroImg}>
          {postData.imageUrl ? (
            <Image
              priority
              alt="hero"
              width={500}
              height={500}
              src={postData.imageUrl}
            />
          ) : null}
        </div>
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
  return <main className={styles.main}></main>;
}
