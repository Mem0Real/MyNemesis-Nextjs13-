import getAllCategories from "@/lib/getAllCategories";
import { Suspense } from "react";
import Parent from "./Parent";

export default async function Sidebar() {
  const categoriesData = getAllCategories();
  const categories = await categoriesData;

  const content = categories.map((category) => {
    return (
      <div className="flex flex-col items-start ps-2 border-black text-sm mb-1">
        <details>
          <summary key={category.id} className="w-64 h-8 cursor-pointer py-6">
            {category.name}
          </summary>
          <div>
            <Suspense fallback={<h2>Loading...</h2>}>
              <Parent category={category.shortName} />
            </Suspense>
          </div>
        </details>
      </div>
    );
  });

  return (
    <section className="w-64 h-fit min-h-screen border-t border-black rounded-r-3xl rounded-t-none bg-white text-black">
      <h1 className="text-2xl font-medium underline mb-12 text-center italic shadow-lg shadow-black pt-4 pb-2 px-4 rounded-b-3xl border-2 border-t-0 border-black w-fit mx-auto">
        Categories
      </h1>
      {content}
    </section>
  );
}
