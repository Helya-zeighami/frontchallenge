export async function getAllUsers() {
  const res = await fetch("http://localhost:3000/users");
  return await res.json();
}
