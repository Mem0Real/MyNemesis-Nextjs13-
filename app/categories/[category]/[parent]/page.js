import getAllChildren from "@/lib/getAllChildren";
import Link from "next/link";

export async function generateMetadata({ params: { parent } }) {
  let firstLetter = parent[0];
  firstLetter = firstLetter.toUpperCase();
  let categoryName = firstLetter + parent.slice(1);
  return {
    title: `Nemesis - ${categoryName}`,
  };
}

export default async function Child({ params }) {
  const { category, parent } = params;
  const childCategoriesData = getAllChildren(category, parent);

  const childCategories = await childCategoriesData;

  const content = (
    <section>
      {childCategories.map(async (childCategory) => {
        return (
          <>
            <p key={childCategory.id}>
              <Link
                href={`/categories/${category}/${parent}/${childCategory.id}`}
              >
                {childCategory.name}
              </Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content;
}
