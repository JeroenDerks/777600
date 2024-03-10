"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: "../../asset/DigitalPlay.ttf" });
const startTime = 1710147600;

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
            <h5 className={styles.subTitle}>Seconden tot 11 maart 10:00 </h5>
            <br />
            <h4 className={styles.title}> {currTime - startTime}</h4>
          </div>
          <br />
          <div style={{ gap: "64px", marginTop: 200 }}>
            <h5 className={styles.subTitle}>Seconden sinds 11 maart 10:00 </h5>
            <h4 className={styles.title}>
              {startTime < currTime ? currTime - startTime : "0"}
            </h4>
          </div>

          <div style={{ gap: "64px", marginTop: 200 }}>
            <h5 className={styles.subTitle}>Seconden sinds 07 maart 10:00 </h5>
            <h4 className={styles.title}>
              {1709802000 < currTime ? currTime - 1709802000 : "0"}
            </h4>
          </div>
        </div>
      </div>
    </main>
  );
}
