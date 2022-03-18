export interface LoginData {
  username: string;
  password: string;
  token?: string;
  id?: string;
}

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}
