// app/layout.tsx
import Footer from "@/components/Footer";
import "@/styles/globals.scss";
import data from "@/constants/userData.json";
import Script from 'next/script';

export const metadata = data.metadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="sr">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <Script
          src="https://buttons.github.io/buttons.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        <main>{children}</main>
        <Footer
          socialLinks={data.footer.socialLinks}
          copyrightText={data.footer.copyrightText}
          authorName={data.footer.authorName}
          authorLink={data.footer.authorLink}
          githubButtons={data.footer.githubButtons}
        />{" "}
      </body>
    </html>
  );
}
