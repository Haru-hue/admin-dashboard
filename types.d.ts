type CardProps = {
  name: string;
  amount: number;
};

type Chat = {
  avatar: string;
  name: string;
  text: string;
  time: number;
  textCount: number;
  dot: number;
};

type Brand = {
  logo: string;
  name: string;
  visitors: number;
  revenues: string;
  sales: number;
  conversion: number;
};

type UserForm = {
  firstname: string,
  lastname: string,
  customerId?: string,
  role?: string,
  email: string,
  password: string,
}

type LoginForm = {
  customerId: string,
  password: string,
}