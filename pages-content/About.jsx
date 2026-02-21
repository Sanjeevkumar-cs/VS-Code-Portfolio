import styles from "@/styles/About.module.css";
import SkillCube from "@/components/SkillCube"; // Import the new component

export default function About() {
  return (
    <div className={styles.container}>
      {/* LEFT PANE: The "Code" Editor */}
      <div className={styles.editorPane}>
        <div className={styles.lineNumbers}>
          {Array.from({ length: 25 }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className={styles.codeArea}>
          <div className={styles.line}>
            <span className={styles.comment}>&lt;!-- about.html --&gt;</span>
          </div>
          <div className={styles.line}>
            <span className={styles.tag}>&lt;html&gt;</span>
          </div>
          <div className={styles.indent}>
            <span className={styles.tag}>&lt;body&gt;</span>
          </div>

          <div className={styles.doubleIndent}>
            <span className={styles.tag}>&lt;h1&gt;</span>
            <span className={styles.text}>About Me</span>
            <span className={styles.tag}>&lt;/h1&gt;</span>
          </div>

          <br />

          <div className={styles.doubleIndent}>
            <span className={styles.tag}>&lt;p&gt;</span>
          </div>
          <div className={styles.tripleIndent}>
            <span className={styles.text}>
              I am an aspiring{" "}
              <span className={styles.highlight}>AI Engineer</span> with a
              unique advantage: I build production-grade user interfaces. While
              mastering <span className={styles.highlight}>Python</span> and{" "}
              <span className={styles.highlight}>Machine Learning</span>{" "}
              architectures, I leverage my strong background in{" "}
              <span className={styles.highlight}>React.js</span> and{" "}
              <span className={styles.highlight}>Next.js</span> to transform
              complex models into accessible, interactive web applications.
            </span>
          </div>
          <div className={styles.doubleIndent}>
            <span className={styles.tag}>&lt;/p&gt;</span>
          </div>

          <br />

          <div className={styles.doubleIndent}>
            <span className={styles.tag}>&lt;p&gt;</span>
          </div>
          <div className={styles.tripleIndent}>
            <span className={styles.text}>
              My focus is on the{" "}
              <span className={styles.highlight}>Application Layer of AI</span>.
              I don&apos;t just train models; I integrate them. I understand how
              to connect backend logic (Python) with modern frontends, ensuring
              that intelligent systems are not just accurate, but usable and
              visually engaging.
            </span>
          </div>
          <div className={styles.doubleIndent}>
            <span className={styles.tag}>&lt;/p&gt;</span>
          </div>

          <div className={styles.indent}>
            <span className={styles.tag}>&lt;/body&gt;</span>
          </div>
          <div className={styles.line}>
            <span className={styles.tag}>&lt;/html&gt;</span>
          </div>
        </div>
      </div>

      {/* RIGHT PANE: The "Live Preview" */}
      <div className={styles.previewPane}>
        <div className={styles.previewHeader}>
          <span>Live Preview: Skill_Cube</span>
        </div>

        {/* We use our new component here! */}
        <SkillCube />
      </div>
    </div>
  );
}
