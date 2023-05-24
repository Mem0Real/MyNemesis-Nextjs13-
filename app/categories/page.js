import Link from "next/link";
import getAllCategories from "@/lib/getAllCategories";


export default async function Categories() {
  const categoriesData = getAllCategories();
  const categories = await categoriesData;

  const content = (
    <section>
      <h2>
        <Link href="/">Back to Home</Link>
      </h2>
      <br />
      <div className="flex flex-col justify-around items-center">
        <h1 className="text-3xl underline italic pb-12 pt-6">Categories</h1>

        {categories.map((category) => {
          return (
            <>
              <p key={category.id} className="py-3 text-lg">
                <Link href={`/categories/${category.shortName}`}>
                  {category.name}
                </Link>
              </p>
            </>
          );
        })}
      </div>
    </section>
  );
  return content;
}
