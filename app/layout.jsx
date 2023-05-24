import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import "./globals.css";
import getAllCategories from "@/lib/getAllCategories";

export const metadata = {
  title: "Nemesis",
  description: "Nextjs 13 practice",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        <Navbar />
        <div className="grid md:grid-cols-5 gap-1">
          <Sidebar />
          <div className="col-span-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
