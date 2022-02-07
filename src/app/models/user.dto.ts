export interface UserContainer {
  user: User;
}

export interface User {
  id: number
  username: string;
  email: string;
  bio: string;
  image: string;
  token: string;
}

export interface UserToken {
  email: string;
  exp: number;
  iat: number;
  id: number;
  username: string;
}
