import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  VscAccount,
  VscSettings,
  VscMail,
  VscCode,
  VscFiles,
  VscEdit,
} from "react-icons/vsc";

import styles from "@/styles/Sidebar.module.css";

const sidebarTopItems = [
  { Icon: VscFiles, path: "/" },
  { Icon: VscCode, path: "/projects" },
  { Icon: VscEdit, path: "/skills" }, // Ensure this matches your component registry key
  { Icon: VscMail, path: "/contact" },
];

const sidebarBottomItems = [
  { Icon: VscAccount, path: "/about" },
  { Icon: VscSettings, path: "/settings" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link href={path} key={path}>
            <div
              className={`${styles.iconContainer} ${
                // Update check to use 'pathname' instead of 'router.pathname'
                pathname === path ? styles.active : ""
              }`}
            >
              <Icon size={24} className={styles.icon} />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <div className={styles.iconContainer} key={path}>
            <Link href={path}>
              <Icon
                size={24}
                className={`${styles.icon} ${
                  pathname === path ? styles.active : ""
                }`}
              />
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
