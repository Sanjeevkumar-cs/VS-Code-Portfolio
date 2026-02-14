"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";

import styles from "@/styles/HomePage.module.css";

export default function HomePage() {
  const [activeLineIndex, setActiveLineIndex] = useState(0);

  const codeLines = [
    { code: "const HomePage = () => {", type: "function" },
    {
      code: "  const [modelStatus, setModelStatus] = useState('Initializing');",
      type: "variable",
    },
    { code: "  const engineerProfile = {", type: "variable" },
    { code: "    name: 'Sanjeev Kumar',", type: "array-item" },
    { code: "    type: 'AI Engineer & web Developer',", type: "array-item" },
    {
      code: "    stack: ['PyTorch', 'LangChain', 'Next.js'],",
      type: "array-item",
    },
    {
      code: "    mission: 'Optimizing weights for scalable web AI',",
      type: "array-item",
    },
    { code: "  };", type: "array-end" },
    { code: "", type: "blank" },
    { code: "  useEffect(() => {", type: "nested-function" },
    {
      code: "    // Simulating model warm-up sequence",
      type: "comment",
    },
    {
      code: "    setModelStatus('Ready for Inference');",
      type: "function-call",
    },
    { code: "  }, []);", type: "close" },
    { code: "", type: "blank" },
    { code: "  return (", type: "return-object" },
    {
      code: '    <main className="neural-network-hero">',
      type: "object-method",
    },
    { code: "      <h1>{engineerProfile.name}</h1>", type: "object-method" },
    {
      code: "      <code>{engineerProfile.type}</code>",
      type: "object-method",
    },
    { code: '      <div className="status-indicator">', type: "object-method" },
    {
      code: "        System Status: {modelStatus}",
      type: "object-method",
    },
    { code: "      </div>", type: "object-method" },
    { code: "    </main>", type: "object-method" },
    { code: "  );", type: "close" },
    { code: "};", type: "close-function" },
    { code: "", type: "blank" },
    { code: "export default HomePage;", type: "function-call" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLineIndex((prev) => (prev + 1) % codeLines.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [codeLines.length]);

  return (
    <div className={styles.heroLayout}>
      <div className={styles.container}>
        <div className={styles.codeSection}>
          <div className={styles.codeContainer}>
            <div className={styles.editorContent}>
              <div className={styles.lineNumbers}>
                {codeLines.map((_, index) => (
                  <div
                    key={index}
                    className={`${styles.lineNumber} ${
                      index === activeLineIndex ? styles.activeLine : ""
                    }`}
                  >
                    {index + 1}
                  </div>
                ))}
              </div>

              <div className={styles.codeEditor}>
                {codeLines.map((line, index) => (
                  <div
                    key={index}
                    className={`${styles.codeLine} ${styles[line.type]} ${
                      index === activeLineIndex ? styles.highlightedLine : ""
                    }`}
                  >
                    {line.code}
                  </div>
                ))}
              </div>

              <div className={styles.overlayGlow}></div>
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.developerName}>
            Sanjeev<span className={styles.accentText}> Kumar</span>
          </h1>

          <div className={styles.developerRole}>
            AI Engineer & Web Developer
          </div>

          <p className={styles.bio}>
            Building the Application Layer of AI. I transform raw models into
            engaging products, engineering the &apos;last mile&apos; of delivery
            to make intelligent systems accessible and user-friendly.
          </p>
          <div className={styles.actionLinks}>
            <Link href="/projects" className={styles.primaryLink}>
              View Projects <VscArrowRight />
            </Link>
          </div>
        </div>
      </div>

      <div className={styles.decorElements}>
        <div className={styles.codeFlare}></div>
        <div className={styles.gridLines}></div>
        <div className={styles.codeBlock1}>{"{"}</div>
        <div className={styles.codeBlock2}>{"}"}</div>
        <div className={styles.codeBlock3}>{"<>"}</div>
        <div className={styles.codeBlock4}>{"/>"}</div>
        <div className={styles.orb1}></div>
        <div className={styles.orb2}></div>
        <div className={styles.orb3}></div>
        <div className={styles.codeSymbol1}>{"()"}</div>
        <div className={styles.codeSymbol2}>{"[]"}</div>
        <div className={styles.codeSymbol3}>{"=>"}</div>
        <div className={styles.dotPattern}></div>
        <div className={styles.mobileAccent}></div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "Home" },
  };
}
