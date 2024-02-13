export async function getAllUsers() {
  const res = await fetch("https://json-server-lyko.vercel.app/users");
  return await res.json();
}
