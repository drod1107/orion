// /types/user.ts
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  createdAt: Date;
  updatedAt: Date;
}
