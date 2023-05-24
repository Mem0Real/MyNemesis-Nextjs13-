export default async function getAllChildren(category, parent) {
    const res = await fetch(`http://localhost:8080/api/categories/${category}/${parent}/all`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  