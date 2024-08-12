export type Role = 'guest' | 'admin';

export type LoginParams = {
  username: string;
  password: string;
}

export type LoginResult = {
  token: string;
  username: string;
  role: Role;
}

export type LogoutParams = {
  token: string;
}

