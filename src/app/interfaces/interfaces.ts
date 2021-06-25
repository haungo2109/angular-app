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

export interface Post {
  image: string | string[];
  title: string;
  content: string;
  id: string;
  time: string;
  like: number;
  id_comment: string;
}

export interface Comment {
  id: string;
  content: string;
}
