export interface LoginData {
  username: string;
  password: string;
}

export interface DecodedToken {
  username: string;
  id: string;
  iat: number;
}
