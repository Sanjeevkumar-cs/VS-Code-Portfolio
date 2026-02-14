"use client";

import Tab from "@/components/Tab";
import styles from "@/styles/Tabsbar.module.css";

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      {/* Ensure these files exist in your public/logos folder! */}
      <Tab icon="/logos/react_icon.svg" filename="home.tsx" path="/" />
      <Tab icon="/logos/html_icon.svg" filename="about.html" path="/about" />
      <Tab icon="/logos/css_icon.svg" filename="contact.css" path="/contact" />
      <Tab
        icon="/logos/icons8-python.svg"
        filename="projects.py"
        path="/projects"
      />
      <Tab icon="/logos/json_icon.svg" filename="skill.json" path="/skills" />
    </div>
  );
};

export default Tabsbar;
