"use client";

// 1. Change the import source
import Titlebar from "./Titlebar"; // <--- Make sure this is imported!
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Bottombar from "./Bottombar";
import Tabsbar from "./Tabsbar";
import styles from "@/styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* USE TITLEBAR HERE, NOT NAVBAR */}
      <Titlebar />

      <div className={styles.mainBody}>
        <Sidebar />
        <Explorer />
        <div className={styles.content}>
          <Tabsbar />
          <div className={styles.codeArea}>{children}</div>
        </div>
      </div>

      <Bottombar />
    </div>
  );
};

export default Layout;
