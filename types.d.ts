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

type RowData = {
  [key: string]: any
}

type Column = {
  Header: string,
  accessor: (row: RowData) => JSX.Element,
}

type TableData = {
  columns: Column[],
  data: RowData[],
}

type Users = {
  firstname: string,
  lastname: string,
  email: string,
  createdAt: string,
}