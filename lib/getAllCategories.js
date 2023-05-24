export default async function getAllCategories() {
  const res = await fetch("http://localhost:8080/api/categories/all");
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
}
