export interface User {
  name: string;
  email: string;
  address?: string;
  phone?: string;
  sex?: string;
  type?: number;
}
export interface Action {
  type: string;
  data: User;
}

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  email: string;
  password: User;
}

export interface HandleError {
  error: any;
}
