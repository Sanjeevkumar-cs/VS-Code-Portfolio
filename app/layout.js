import "./globals.css";
import "@/styles/themes.css"; // Use the @ alias to point to your styles folder
import Layout from "@/components/Layout";

export const metadata = {
  title: "Sanjeev Kumar | Full Stack Developer",
  description:
    "A professional portfolio built with Next.js and styled like VS Code.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="github-dark">
      {/* Set your default theme here */}
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
