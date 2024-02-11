"use client";
import { useRouter } from "next/navigation";
import React from "react";

const RemoveButton = ({ id }: { id: number }) => {
  const router = useRouter();
  const handleDelete = async () => {
    const res = await fetch(`http://localhost:3500/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <div>
      <button
        onClick={handleDelete}
        className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
      >
        Delete
      </button>
    </div>
  );
};

export default RemoveButton;
