"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "@/styles/Tabsbar.module.css";

const Tab = ({ icon, filename, path }) => {
  const pathname = usePathname();
  const isActive = pathname === path;

  return (
    <Link
      href={path}
      className={`${styles.tab} ${isActive ? styles.active : ""}`}
    >
      <div className={styles.iconContainer}>
        <Image
          src={icon}
          alt={filename}
          width={18}
          height={18}
          className={styles.icon} // Ensure this class doesn't override colors
        />
      </div>
      <p>{filename}</p>
    </Link>
  );
};

export default Tab;
