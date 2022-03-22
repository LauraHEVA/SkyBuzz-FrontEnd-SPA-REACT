export interface LoginData {
  username: string;
  password: string;
  token?: string;
}

export interface UserData {
  name: string;
  username: string;
  id: string;
  loggedIn: boolean;
}

export interface RegisterUserData {
  name: string;
  username: string;
  password: string;
}

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}

export interface UserCardProps {
  user: UserData;
}
