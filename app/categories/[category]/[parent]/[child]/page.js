import getAllItems from "@/lib/getAllItems";
import Link from "next/link";
import updateAllChildren from "@/lib/updateItems";

export async function generateMetadata({ params: { child } }) {
  let firstLetter = child[0];
  firstLetter = firstLetter.toUpperCase();
  let categoryName = firstLetter + child.slice(1);
  return {
    title: `Nemesis - ${categoryName}`,
  };
}

export const Updater = async (category, parent, child, itemId) => {
  const updateChild = updateAllChildren(category, parent, child, itemId);
  const update = await updateChild;
  return update;
};

export default async function Item({ params }) {
  const { category, parent, child } = params;

  const itemsData = getAllItems(category, parent, child);

  const items = await itemsData;

  let updatedName, update, itemName;

  const content = (
    <section>
      {items.map((currentItem) => {
        if (currentItem.shortName) {
          itemName = currentItem.shortName;
        } else {
          itemName = currentItem.name.toLowerCase();
          itemName = itemName.replace(/\s/g, "-");

          updatedName = Updater(
            category,
            parent,
            child,
            currentItem.id,
            itemName
          );
        }
        return (
          <>
            <p key={currentItem.id}>
              <Link
                href={`/categories/${category}/${parent}/${child}/${itemName}`}
              >
                {currentItem.name}
              </Link>
            </p>
          </>
        );
      })}
    </section>
  );
  return content;
}
