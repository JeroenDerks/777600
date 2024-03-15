"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../asset/digital_counter_7_italic.ttf" });
const startTime = 1710514800;

export default function Home() {
  const [currTime, setCurrTime] = useState<number>(0);

  useEffect(() => {
    setInterval(() => {
      const _currTime = Math.round(new Date().getTime() * 0.001);
      setCurrTime(_currTime);
    }, 100);
  }, []);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div className={`${myFont.className}`}>
          <div>
            <h5 className={styles.subTitle}>Seconden tot 15 maart 16:00 </h5>

            <br />
            {currTime && startTime && (
              <h4 className={`${styles.title} `}>{currTime - startTime}</h4>
            )}
          </div>
          <br />
          <div style={{ gap: "64px", marginTop: 200 }}>
            <h5 className={styles.subTitle}>Seconden sinds 15 maart 16:00 </h5>
            <h4 className={`${styles.title} `}>
              {startTime < currTime ? currTime - startTime : "0"}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
