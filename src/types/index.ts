export interface AppState {
  user: {
    accessToken: string;
    refreshToken: string;
    user: {
      firstName: string;
      lastName: string;
      email: string;
      mobile: string;
    } | null;
  } | null;
  token: string;
  username: string;
  password: string;
  success: boolean;
  error: boolean;
  message: string;
}

export interface UserInfo {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
}
