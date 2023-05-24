export default async function getAllParents(category) {
    const res = await fetch(`http://localhost:8080/api/categories/${category}/all`);
    if (!res.ok) throw new Error("Failed to fetch data");
    return res.json();
  }
  