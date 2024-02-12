import React from "react";
import UsersCard from "./UsersCard";
import { useUsers } from "./UsersContex";

const Users: React.FC = () => {
  const { users } = useUsers();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {users.map((user: any) => (
        <UsersCard key={user.id} id={user.id} username={user.name} />
      ))}
    </div>
  );
};

export default Users;
