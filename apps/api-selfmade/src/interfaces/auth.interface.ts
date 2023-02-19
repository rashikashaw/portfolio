import { Request } from 'express';
import { User } from '@prisma/client';

export type DataStoredInToken = {
  id: number;
};

export type TokenData = {
  token: string;
  expiresIn: number;
};

export type RequestWithUser = {
  user: User;
} & Request;
