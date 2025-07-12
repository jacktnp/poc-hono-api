// src/api/users/user.service.ts

// Mock user data
const users = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
];

// Define a type for our user object for type safety
export type User = {
  id: string;
  name: string;
  email: string;
};

// Service functions that contain the core logic
export const userService = {
  findAll: async (): Promise<User[]> => {
    // In a real app, you would fetch this from a database
    return users;
  },
  findById: async (id: string): Promise<User | undefined> => {
    // In a real app, you would query the database for a user with this id
    return users.find((user) => user.id === id);
  },
};
