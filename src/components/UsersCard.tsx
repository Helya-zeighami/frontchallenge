import React from "react";
import RemoveButton from "./RemoveButton";
import EditButton from "./EditButton";

type UsersCardProps = {
  username: string;
  id: number;
};

const UsersCard: React.FC<UsersCardProps> = ({ username, id }) => {
  return (
    <div className="max-w-xs w-full bg-pink-200 shadow-lg rounded-lg overflow-hidden mb-6">
      <div className="px-6 py-4">
        <div className="font-bold text-2xl mb-2 text-pink-800">{username}</div>
      </div>
      <div className="px-6 py-2 flex flex-col items-center">
        <div className="mb-2">
          <RemoveButton id={id} />
        </div>
        <div>
          <EditButton id={id} />
        </div>
      </div>
    </div>
  );
};

export default UsersCard;
