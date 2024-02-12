export async function getAllUsers() {
  const res = await fetch("http://localhost:3500/users");
  return await res.json();
}
