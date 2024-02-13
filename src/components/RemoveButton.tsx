"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useUsers } from "./UsersContext";

const RemoveButton: React.FC<{ id: number }> = ({ id }) => {
  const router = useRouter();
  const { removeUser } = useUsers();

  const handleDelete = async () => {
    const res = await fetch(`https://json-server-lyko.vercel.app/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.refresh();
      removeUser(id);
    }
  };

  return (
    <div>
      <button
        onClick={handleDelete}
        className="inline-block bg-pink-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      >
        Delete
      </button>
    </div>
  );
};

export default RemoveButton;
