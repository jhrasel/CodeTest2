import Layout from "@/components/Layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Orebi",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
