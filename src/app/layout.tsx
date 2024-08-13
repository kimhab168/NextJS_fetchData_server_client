import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import Fb_logo from "../images/fb_logo.png";
import Image from "next/image";
import Telegram from "../images/Telegram.png";
import { usePathname } from "next/navigation";
export const metadata: Metadata = {
  title: "Hab X NextJS",
  description: "Generated by Developer Full Stack",
};
const navLink = [
  { name: "Home", href: "/" },
  { name: "Products Client", href: "/products" },
  { name: "Product Sever", href: "/products-server" },
  { name: "Product Load", href: "/products-scroll" },
  { name: "About", href: "/about" },
];
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="container" className="flex flex-col h-screen">
          <section className="w-screen h-14 bg-red-300 fixed top-0">
            <ul className="w-full h-full flex justify-evenly items-center gap-x-8">
              {navLink.map((link) => (
                <>
                  <li>
                    <Link href={link.href} key={link.name}>
                      {link.name}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </section>
          <main className="flex-1 flex flex-col justify-center items-center">
            {children}
          </main>
          <section className="w-screen h-28 bg-red-300">
            <ul className="w-full h-full flex justify-evenly items-center text-2xl font-bold">
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100087606796855"
                  target="blank"
                >
                  <Image src={Fb_logo} className="w-12" alt="fb" />
                </a>
              </li>
              <li>
                <a href="https:/t.me/KIMHABSERVICES" target="blank">
                  <Image src={Telegram} className="w-16" alt="tg" />
                </a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">X</a>
              </li>
              <li>
                <a href="#">Cool App</a>
              </li>
            </ul>
          </section>
        </div>
      </body>
    </html>
  );
}