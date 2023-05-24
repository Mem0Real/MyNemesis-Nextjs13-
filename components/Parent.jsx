import getAllParents from "@/lib/getAllParents";
import { Suspense } from "react";
import Child from "./Child";
import Link from "next/link";

export default async function Parent({ category }) {
  const parentData = getAllParents(category);

  const parents = await parentData;

  const content = (
    <section>
      {parents.map((parent) => {
        return (
          <div className="flex flex-col items-center my-auto ps-2 border-black text-sm mb-1">
            <details>
              <summary key={parent.id} className="w-60 h-8 cursor-pointer py-6">
                {parent.name}
              </summary>
              <div>
                <Suspense fallback={<h2>Loading...</h2>}>
                  <Child category={category} parent={parent.shortName} />
                </Suspense>
              </div>
            </details>
          </div>
        );
      })}
      <div className="mt-2 mx-auto text-center border-2 rounded-full px-5 border-y-0 border-black w-fit italic">
        <Link href={`/categories/${category}`}>
          Show All {`${category[0].toUpperCase()}${category.slice(1)}s`}
        </Link>
      </div>
    </section>
  );
  return content;
}
