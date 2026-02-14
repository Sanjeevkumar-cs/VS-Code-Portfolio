"use client";

import Head from "next/head";
// Import layout styles as 'layout'
import layout from "../styles/Skills.module.css";
// Import card styles as 'card'
import card from "../styles/SkillCard.module.css";

const skillsData = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "Python", level: "Advanced", icon: "🐍" },
      { name: "TensorFlow / PyTorch", level: "Intermediate", icon: "🧠" },
      { name: "Computer Vision", level: "Intermediate", icon: "👁️" },
      { name: "NLP", level: "Learning", icon: "🗣️" },
      { name: "LangChain", level: "Intermediate", icon: "🦜" },
      { name: "pandas", level: "Advanced", icon: "🐼" },
      { name: "NumPy", level: "Advanced", icon: "🔢" },
    ],
  },
  {
    category: "Frontend Development",
    items: [
      { name: "React.js", level: "Intermediate", icon: "⚛️" },
      { name: "Next.js", level: "Intermediate", icon: "▲" },
      { name: "JavaScript (ES6+)", level: "Intermediate", icon: "📜" },
      { name: "HTML5 & CSS3", level: "Expert", icon: "🌐" },
    ],
  },
  {
    category: "Backend & Database",
    items: [
      { name: "Node.js", level: "Beginner", icon: "🟢" },
      { name: "SQL", level: "Intermediate", icon: "🗃️" },
      { name: "FastAPI", level: "Beginner", icon: "⚡" },
    ],
  },
  {
    category: "Tools & DevOps",
    items: [
      { name: "Git & GitHub", level: "Advanced", icon: "🐙" },
      { name: "VS Code", level: "Expert", icon: "💻" },
      { name: "Postman", level: "Advanced", icon: "🚀" },
    ],
  },
];

export default function Skills() {
  return (
    <>
      <Head>
        <title>Skills | Portfolio</title>
      </Head>

      {/* Layout Container */}
      <div className={layout.container}>
        {/* Left Side: Text Zone */}
        <div className={layout.textZone}>
          <h1 className={layout.title}>
            My <span className={layout.highlight}>Skills</span>
          </h1>
          <p className={layout.description}>
            I am cultivating a hybrid skillset that bridges the gap between
            <strong> Full Stack Development</strong> and{" "}
            <strong>Artificial Intelligence</strong>.
          </p>
          <p className={layout.description}>
            From building responsive frontends with React to training models in
            Python, I love working across the entire technology stack.
          </p>
        </div>

        {/* Right Side: Skills Wrapper */}
        <div className={layout.skillsContainer}>
          {skillsData.map((category, index) => (
            // Skill Card Component
            <div key={index} className={card.categoryCard}>
              <h2 className={card.categoryTitle}>{category.category}</h2>
              <div className={card.grid}>
                {category.items.map((skill, idx) => (
                  <div key={idx} className={card.skillItem}>
                    <span className={card.skillIcon}>{skill.icon}</span>
                    <div className={card.skillInfo}>
                      <span className={card.skillName}>{skill.name}</span>
                      <span className={card.skillLevel}>{skill.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
