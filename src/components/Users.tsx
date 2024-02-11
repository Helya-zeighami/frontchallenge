"use client";
import React, { useEffect, useState } from "react";
import UsersCard from "./UsersCard";
import { User } from "@/types/users";
import { getAllUsers } from "@/lib/users";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchData = async () => {
        const usersData = await getAllUsers();
        setUsers(usersData);
      }

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UsersCard key={user.id} id={user.id} username={user.name} />
      ))}
    </div>
  );
};

export default Users;
