import styles from "@/styles/SkillCube.module.css";

export default function SkillCube() {
  const cubeFaces = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.stageCubeCont}>
      <div className={styles.cubeSpinner}>
        {cubeFaces.map((faceIndex) => (
          <div key={faceIndex} className={styles[`face${faceIndex}`]} />
        ))}
      </div>
    </div>
  );
}
