import Link from "next/link";

export const metadata = {
    title: 'Nemesis - Collections'
}
export default function Navigation({ children }) {
  return (
    <>
      <nav className="text-black">
        <ul>
          <li>
            <Link href="/">Back to Home</Link>
          </li>
        </ul>
      </nav>
      <div className="bg-black">{children}</div>
    </>
  );
}
