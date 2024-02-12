"use client"
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getAllUsers } from '@/lib/users';
import { Users, UsersContextType } from '../types/users';

const UsersContext = createContext<UsersContextType | undefined>(undefined);

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};

export const UsersProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<Users[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const usersData = await getAllUsers();
      setUsers(usersData);
    }
    fetchData();
  }, []);

  const addUser = (newUser: Users) => {
    setUsers(prevUsers => [...prevUsers, newUser]);
  };

  const editUser = (userId: number, newName: string) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === userId ? { ...user, name: newName } : user
      )
    );
  };

  const removeUser = (userId: number) => {
    setUsers(prevUsers =>
      prevUsers.filter(user => user.id !== userId)
    );
  };

  return (
    <UsersContext.Provider value={{ users, addUser, editUser, removeUser }}>
      {children}
    </UsersContext.Provider>
  );
};
