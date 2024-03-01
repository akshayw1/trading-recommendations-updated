import styles from "./styles.module.css";
import Image from "next/image";
export default function Blog() {
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
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
                    Lorem Ipsum Dolor Sit Amet, Ipsum Adipiscing Elit, Sed Do,
                    Ipsum Dolor Sit Amet Lorem Lipsum.
                  </p>
                  <div className={styles.recentPostEntryInfo}>
                    <p className={styles.recentPostAuthor}>By Tracey Wilson</p>
                    <p className={styles.recentPostDate}>August 20, 2022</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
      <aside className={styles.hotStory}>
        <h3>Hot Stories</h3>
        <div className={styles.hotStoryGrid}>
          <div className={styles.hotStoryLabel}>#Bitcoin</div>
          <div className={styles.hotStoryLabel}>#Stock-Market</div>
          <div className={styles.hotStoryLabel}>#Trading</div>
          <div className={styles.hotStoryLabel}>#ETF</div>
          <div className={styles.hotStoryLabel}>#Ethereum</div>
          <div className={styles.hotStoryLabel}>#Lorem</div>
          <div className={styles.hotStoryLabel}>#Ipsum</div>
          <div className={styles.hotStoryLabel}>#Bitcoin</div>
          <div className={styles.hotStoryLabel}>#Stock-Market</div>
          <div className={styles.hotStoryLabel}>#Trading</div>
          <div className={styles.hotStoryLabel}>#ETF</div>
          <div className={styles.hotStoryLabel}>#Ethereum</div>
          <div className={styles.hotStoryLabel}>#Lorem</div>
          <div className={styles.hotStoryLabel}>#Ipsum</div>{" "}
          <div className={styles.hotStoryLabel}>#Bitcoin</div>
          <div className={styles.hotStoryLabel}>#Stock-Market</div>
          <div className={styles.hotStoryLabel}>#Trading</div>
          <div className={styles.hotStoryLabel}>#ETF</div>
          <div className={styles.hotStoryLabel}>#Ethereum</div>
          <div className={styles.hotStoryLabel}>#Lorem</div>
          <div className={styles.hotStoryLabel}>#Ipsum</div>
        </div>
      </aside>
    </main>
  );
}
