export type User = {
  id: number;
  name: string;
  username: string;
  email?: string;
  phone?: string;
  website?: string;
};

export interface Users {
  id: number;
  name: string;
}

export interface UsersContextType {
  users: Users[];
  addUser: (newUser: User) => void;
  editUser: (userId: number, newName: string) => void;
  removeUser: (userId: number) => void;
}
