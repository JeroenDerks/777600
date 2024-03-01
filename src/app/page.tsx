"use client";

import styles from "./page.module.css";
import { useEffect, useState } from "react";

const startTime = 1707296400;

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
        <div>
          <h3>Ik tel sinds: {new Date(startTime * 1000).toLocaleString()}</h3>
          <div style={{ display: "flex", gap: "64px", marginTop: 100 }}>
            <h4>Geweest: </h4>
            <h4>{currTime - startTime}</h4>
          </div>
          <div style={{ display: "flex", gap: "64px", marginTop: 24 }}>
            <h4>Te gaan: </h4>
            <h4>{777600 - (currTime - startTime)}</h4>
          </div>
          <div style={{ display: "flex", gap: "64px", marginTop: 24 }}>
            <h4>Totaal:</h4>
            <h4>777600</h4>
          </div>

          <a href="intent:///registration/cd9f6330-4bbf-42d1-8190-76c3f791dc59#intent;scheme=com.keesing.documentchecker.dev;package=com.keesing.documentchecker.dev;s.browser_fallback_url=/registration/cd9f6330-4bbf-42d1-8190-76c3f791dc59;end">
            Test on android
          </a>
        </div>
      </div>
    </main>
  );
}
