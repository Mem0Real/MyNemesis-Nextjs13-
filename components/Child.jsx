import getAllChildren from "@/lib/getAllChildren";
import Link from "next/link";

export default async function Child({ category, parent }) {
  const childrenData = getAllChildren(category, parent);

  const children = await childrenData;

  const content = (
    <section>
      <ul className="list-disc">
        <div className="flex flex-col justify-start items-start my-auto ps-2 border-black text-sm mb-1">
          {children.map((child) => {
            return (
              <li className="py-3 ms-4">
                <Link
                  href={`/categories/${category}/${parent}/${child.shortName}`}
                >
                  {child.name}
                </Link>
              </li>
            );
          })}{" "}
          <div className="mt-2 mx-auto text-center border-2 rounded-full px-5 border-y-0 border-black w-fit italic">
            <Link href={`/categories/${category}/${parent}`}>
              Show All {`${parent[0].toUpperCase()}${parent.slice(1)}`}
            </Link>
          </div>
        </div>
      </ul>
    </section>
  );

  return content;
}
