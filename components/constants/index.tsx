export const USERS_TABLE = (data: Users[]) => [
    {
        Header: 'First Name',
        accessor: (row: any) => {
          return (
            <div className="font-medium">{row?.firstname}</div>
          )
        }
      },
      {
        Header: 'Last Name',
        accessor: (row: any) => {
          return (
            <div className="font-medium">{row?.lastname}</div>
          )
        }
      },
      {
        Header: 'E-mail',
        accessor: (row: any) => {
          return (
            <div className="font-medium">{row?.email}</div>
          )
        }
      },
      {
        Header: 'Date Joined',
        accessor: (row: any) => {
          return (
            <div className="font-medium">{row?.createdAt}</div>
          )
        }
      }
      
]