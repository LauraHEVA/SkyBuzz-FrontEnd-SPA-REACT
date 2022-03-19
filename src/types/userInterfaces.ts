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

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}
