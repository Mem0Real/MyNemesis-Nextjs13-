export default async function updateAllItems(
  category,
  parent,
  child,
  id,
  itemName
) {
  const res = await fetch(
    `http://localhost:8080/api/categories/${category}/${parent}/${child}/${id}`,
    {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shortName: itemName,
      }),
    }
  );
  if (!res.ok) throw new Error("Failed to update data");
  return res.json();
}
