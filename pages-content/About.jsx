import styles from "../styles/About.module.css";

// Helper component for highlighted text
const Highlight = ({ children }) => (
  <span className={styles.highlight}>{children}</span>
);

export default function About() {
  const cubeFaces = [1, 2, 3, 4, 5, 6];

  return (
    <section className={styles.containerAbout}>
      {/* --- Text Section --- */}
      <div className={styles.aboutCard}>
        <h2 className={styles.title}>About Me</h2>

        <p className={styles.paragraph}>
          I am an aspiring <Highlight>AI Engineer</Highlight> with a unique
          advantage: I build production-grade user interfaces. While mastering{" "}
          <Highlight>Python</Highlight> and{" "}
          <Highlight>Machine Learning</Highlight> architectures, I leverage my
          strong background in <Highlight>React.js</Highlight> and{" "}
          <Highlight>Next.js</Highlight> to transform complex models into
          accessible, interactive web applications.
        </p>

        <p className={styles.paragraph}>
          My focus is on the <Highlight>Application Layer of AI</Highlight>. I
          {/* Fixed: escaped apostrophe */}
          don&apos;t just train models; I integrate them. I understand how to
          connect backend logic (Python) with modern frontends, ensuring that
          intelligent systems are not just accurate, but usable and visually
          engaging.
        </p>

        <p className={styles.paragraph}>
          I am currently seeking opportunities where I can apply my dual
          skillset in <Highlight>Frontend Engineering</Highlight> and{" "}
          <Highlight>AI Development</Highlight> to build the next generation of
          intelligent software tools.
        </p>
      </div>

      {/* --- Cube Section --- */}
      <div className={styles.stageCubeCont}>
        <div className={styles.cubeSpinner}>
          {cubeFaces.map((faceIndex) => (
            <div key={faceIndex} className={styles[`face${faceIndex}`]} />
          ))}
        </div>
      </div>
    </section>
  );
}

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}
