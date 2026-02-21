import dynamic from "next/dynamic";

// Helper function to handle both 'export default' and named exports
const loadComponent = (importFunc) => {
  return dynamic(() => importFunc().then((mod) => mod.default || mod));
};

export const PageComponents = {
  home: loadComponent(() => import("@/pages-content/Home.jsx")),
  about: loadComponent(() => import("@/pages-content/About.jsx")),
  projects: loadComponent(() => import("@/pages-content/Projects.jsx")),
  contact: loadComponent(() => import("@/pages-content/Contact.jsx")),
  settings: loadComponent(() => import("@/pages-content/Settings.jsx")),
  skills: loadComponent(() => import("@/pages-content/Skills.jsx")),
  resume: loadComponent(() => import("@/pages-content/Resume.jsx")),
};
