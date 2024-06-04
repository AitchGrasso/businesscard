import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "H Grasso",
  description: "Your next Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-zinc-800 justify-center flex min-h-screen flex-col items-center p-4 gap-5">
          <div className=" sm:w-1/4 w-full h-2/3 bg-neutral-900  text-white rounded-xl shadow-2xl">
            {children}
          </div>
          <div className="text-center">
            <p>
              &copy; 2024 Hannah (H) Grasso.
              <br />
              This project is licensed under the{" "}
              <a href="https://opensource.org/licenses/MIT">
                MIT License
              </a>.{" "}
              <a
                className="hover:text-rose-300"
                href="https://github.com/AitchGrasso/businesscard"
              >
                Clone me?
              </a>
            </p>
          </div>
        </main>
      </body>
    </html>
  );
}
