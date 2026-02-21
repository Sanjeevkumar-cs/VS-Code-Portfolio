import React from "react";
import Link from "next/link";
import styles from "@/styles/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.container}>
      {/* Line Numbers Sidebar */}
      <div className={styles.lineNumbers}>
        {Array.from({ length: 25 }, (_, i) => (
          <span key={i}>{i + 1}</span>
        ))}
      </div>

      {/* Code Content */}
      <div className={styles.codeArea}>
        <div className={styles.comment}>{"/**"}</div>
        <div className={styles.comment}>{"* My professional summary."}</div>
        <div className={styles.comment}>{"*/"}</div>

        <div className={styles.line}>
          <span className={styles.keyword}>const</span>{" "}
          <span className={styles.variable}>profile</span>{" "}
          <span className={styles.operator}>=</span>{" "}
          <span className={styles.bracket}>{`{`}</span>
        </div>

        <div className={styles.indent}>
          <span className={styles.key}>&quot;name&quot;</span>:{" "}
          <span className={styles.string}>&quot;Sanjeev Kumar&quot;</span>,
        </div>
        <div className={styles.indent}>
          <span className={styles.key}>&quot;role&quot;</span>:{" "}
          <span className={styles.string}>&quot;AI Engineer&quot;</span>,
        </div>

        <div className={styles.indent}>
          <span className={styles.key}>&quot;bio&quot;</span>:{" "}
          <span className={styles.string}>
            &quot;Building scalable AI models &amp; backend systems.&quot;
          </span>
          ,
        </div>

        <div className={styles.indent}>
          <span className={styles.key}>&quot;skills&quot;</span>:{" "}
          <span className={styles.bracket}>[</span>
          <span className={styles.string}>&quot;Python&quot;</span>,{" "}
          <span className={styles.string}>&quot;React&quot;</span>,{" "}
          <span className={styles.string}>&quot;Next.js&quot;</span>
          <span className={styles.bracket}>]</span>
        </div>

        <div className={styles.line}>
          <span className={styles.bracket}>{`}`}</span>;
        </div>

        <br />

        <div className={styles.line}>
          <span className={styles.keyword}>export</span>{" "}
          <span className={styles.keyword}>default</span>{" "}
          <span className={styles.function}>function</span>{" "}
          <span className={styles.functionName}>renderActions</span>(){" "}
          <span className={styles.bracket}>{`{`}</span>
        </div>

        <div className={styles.indent}>
          <span className={styles.keyword}>return</span> (
        </div>

        <div className={styles.doubleIndent}>
          <span className={styles.tag}>&lt;&gt;</span>
        </div>

        {/* BUTTON CONTAINER */}
        <div className={styles.buttonContainer}>
          {/* BUTTON 1: PRIMARY (Solid Color) */}
          <a
            href="/resume/Sanjeev_Kumar_Resume.pdf"
            download="Sanjeev_Kumar_Resume.pdf"
            className={`${styles.button} ${styles.primaryButton}`}
          >
            Download PDF
          </a>

          {/* BUTTON 2: SECONDARY (Outline) */}
          <Link
            href="/projects"
            className={`${styles.button} ${styles.secondaryButton}`}
          >
            View Projects
          </Link>
        </div>

        <div className={styles.doubleIndent}>
          <span className={styles.tag}>&lt;/&gt;</span>
        </div>

        <div className={styles.indent}>);</div>

        <div className={styles.line}>
          <span className={styles.bracket}>{`}`}</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
