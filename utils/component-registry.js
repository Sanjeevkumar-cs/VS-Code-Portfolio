import dynamic from "next/dynamic";

export const PageComponents = {
  home: dynamic(() => import("@/pages-content/Home.jsx")),
  about: dynamic(() => import("@/pages-content/About.jsx")),
  projects: dynamic(() => import("@/pages-content/Projects.jsx")),
  contact: dynamic(() => import("@/pages-content/Contact.jsx")),
  settings: dynamic(() => import("@/pages-content/Settings.jsx")),
  skills: dynamic(() => import("@/pages-content/Skills.jsx")),
};
