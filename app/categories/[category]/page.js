import getAllParents from "@/lib/getAllParents";
import Link from "next/link";

export async function generateMetadata({ params: { category } }) {
  let firstLetter = category[0];
  firstLetter = firstLetter.toUpperCase();
  let categoryName = firstLetter + category.slice(1);

  return {
    title: `Nemesis - ${categoryName}`,
  };
}

export default async function Parent({ params }) {
  const { category } = params;
  const parentCategoriesData = getAllParents(category);

  const parentCategories = await parentCategoriesData;

  const content = (
    <section>
      {parentCategories.map((parentCategory) => {
        return (
          <p key={parentCategory.id}>
            <Link href={`/categories/${category}/${parentCategory.shortName}`}>
              {parentCategory.name}
            </Link>
          </p>
        );
      })}
    </section>
  );
  return content;
}
