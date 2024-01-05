import { Post, Role } from '@prisma/client';

export class UserResponseDto {
  id: string;
  email: string;
  firstname?: string;
  lastname?: string;
  role: Role;
  posts?: [Post] | null;
}
