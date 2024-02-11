
import React from 'react';
import RemoveButton from './RemoveButton';
import EditButton from './EditButton';


type UsersCardProps = {
  username: string;
  id:number;
};

const UsersCard: React.FC<UsersCardProps> = ({ username,id }) => {
  return (
    <div className="max-w-xs mx-auto bg-black shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-blue-500">{username}</div>
      </div>
      <div className="px-6 py-4">
        <RemoveButton id={id} />
        <EditButton id={id} />
      </div>
    </div>
  );
};

export default UsersCard;
