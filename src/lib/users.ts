import { User } from "@/types/users";

export const API_URL = "https://json-server-lyko.vercel.app";

export async function getAllUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`);
  return await res.json();
}

export async function deleteUser(id: number): Promise<boolean> {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.ok;
}

export async function updateUser(id: number, name: string): Promise<boolean> {
  const res = await fetch(`${API_URL}/users/${id}`, {
    method: "PUT",
    body: JSON.stringify({ name }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return res.ok;
}
