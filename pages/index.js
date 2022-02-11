import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import { getBdayImage } from "../logic/getBdayImage";
import { getDinner } from "../logic/getDinner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [images, setImages] = useState();
  const [userSubmittedCard, setUserSubmittedCard] = useState(false);
  const [dinner, setDinner] = useState(getDinner());

  const onImageSubmit = (query) => {
    setUserSubmittedCard(true);
    getBdayImage(query, setImages);
  };

  useEffect(() => {
    getBdayImage(["happy birthday", "flowers", "balloons", "cake"], setImages);
  }, []);

  const imgSizer = (w) => (w < 860 ? w / 2 : w / 4);

  return (
    <div className={styles.container}>
      <Head>
        <title>Birthday Dinners</title>
        <meta name="description" content="Let me tell u what to eat" />
        <link rel="icon" href="/favicon.svg" />
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
              width={imgSizer(window.innerWidth)}
              height={imgSizer(window.innerWidth)}
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
          <p style={{ background: "rgba(255,255,255,0.8)" }}>
            <small>
              <i>You can make a list of wishes ;)</i>
            </small>
          </p>
          <input
            type="text"
            name="wish"
            placeholder="What do u want on your card?"
            className={styles.input}
            onBlur={(e) => onImageSubmit([e.target.value])}
          />
        </form>

        <hr />
        {userSubmittedCard && (
          <div className={styles.card}>
            <h3>
              WHOA that is a really good choice!
              <br />
              The algorithm has processed this.
            </h3>
            <h1 className={styles.dinnerChoice}>Have {dinner}</h1>
            <h3>for your birthday dinner.</h3>
            <p>Your friends love you!</p>

            <button onClick={() => setDinner(getDinner(true))}>
              I don't like {dinner} :(
            </button>
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
