import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { getBdayImage } from "../logic/getBdayImage";
import { getDinner } from "../logic/getDinner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [images, setImages] = useState();
  const [userSubmittedCard, setUserSubmittedCard] = useState(false);

  const onImageSubmit = (query) => {
    console.log(query, "??");
    setUserSubmittedCard(true);
    getBdayImage(query, setImages);
  };

  useEffect(() => {
    getBdayImage("happy birthday", setImages);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Birthday Dinners</title>
        <meta name="description" content="Let me tell u what to eat" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        {images &&
          images.map(({ media, alt }, i) => (
            <Image
              key={i}
              src={media[0].gif.url}
              width={window.innerWidth / 4}
              height={window.innerWidth / 4}
              alt={alt}
            />
          ))}
      </div>

      <main className={styles.main} style={{ zIndex: 1, textAlign: "center" }}>
        <form
          onSubmit={(e) =>
            e.preventDefault() || onImageSubmit(e.target[0].value)
          }
        >
          <input
            type="text"
            name="wish"
            placeholder="What do u want on your card?"
            className={styles.input}
          />
        </form>

        <hr />

        {userSubmittedCard && (
          <div
            style={{
              background: "#fbd5dce0",
              padding: "20px",
              borderRadius: "3px",
            }}
          >
            <h3>
              WHOA that is a really good choice!
              <br />
              The algorithm has processed this, and you should have
              <h1 style={{ color: "magenta" }}>{getDinner()}</h1>for your
              birthday dinner.
            </h3>
            <p>Your friends love you!</p>
          </div>
        )}
      </main>

      <footer className={styles.footer}>
        <small style={{ textAlign: "center" }}>
          <i>
            HK RULES
            <a
              href="https://github.com/hilarykitz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <u>More projects on github</u>
            </a>
          </i>
        </small>
      </footer>
    </div>
  );
}
