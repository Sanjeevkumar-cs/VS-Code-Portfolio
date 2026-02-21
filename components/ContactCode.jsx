import styles from "@/styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "sanjeevkumar2062cs@gmail.com",
    // Adds a pre-filled subject line
    href: "mailto:sanjeevkumar2062cs@gmail.com?subject=Portfolio%20Inquiry",
  },
  {
    social: "website",
    link: "https://vs-code-portfolio-green.vercel.app/",
    // Adds a pre-filled subject line
    href: "https://vs-code-portfolio-green.vercel.app/",
  },
  {
    social: "github",
    link: "Sanjeevkumar-cs",
    href: "https://github.com/Sanjeevkumar-cs",
  },
  {
    social: "linkedin",
    link: "Sanjeev Kumar",
    href: "https://www.linkedin.com/in/sanjeevkumar-cs",
  },

  {
    social: "telegram",
    link: "Sam",
    href: "https://t.me/Ucetsam",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
