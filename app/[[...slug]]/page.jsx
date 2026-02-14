import { PageComponents } from "@/utils/component-registry";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const currentPath = slug ? slug[0] : "home";
  const title = currentPath.charAt(0).toUpperCase() + currentPath.slice(1);
  return { title: `Sanjeev Kumar | ${title}` };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const currentPath = slug ? slug[0] : "home";

  // Look up the component in your Registry
  const SelectedPage = PageComponents[currentPath];

  if (!SelectedPage) {
    return <div>404 Page Not Found</div>;
  }

  // Render the page (extraProps removed)
  return <SelectedPage />;
}
