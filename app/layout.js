import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    //title: "Layout Metadata",
    description: "This is the layout metadata",
    title: {
        default: "Next App - Ruma",
        template: "%s | Next App",
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                <main className="w-screen mx-auto flex flex-col gap-2">
                    {children}
                </main>
            </body>
        </html>
    );
}
