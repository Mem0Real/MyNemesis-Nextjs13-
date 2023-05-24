import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center mt-12">
      <h1 className="text-yellow-300">Home Page</h1>
      <p>
        <Link href="/categories">Categories</Link>
      </p>
    </main>
  );
}
