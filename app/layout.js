import { Work_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./(components)/nav";

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false;

const work = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket App",
  description: "Created by Diana Cervantes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={work.className}>
        <div className="flex flex-col h-screen max-h-screen text-default_text">
          <Nav/>
          <div className="flex-grow overflow-y-auto bg-page">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
