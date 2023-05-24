"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation({ children }) {
  const router = useRouter();

  return (
    <>
      <nav className="text-black">
        <ul>
          <li>
            {/* <Link href="/">Back to Home</Link> */}
            <button onClick={() => router.back()} className="px-4 bg-none m-12">
              Go back
            </button>
          </li>
        </ul>
      </nav>
      <div>{children}</div>
    </>
  );
}
