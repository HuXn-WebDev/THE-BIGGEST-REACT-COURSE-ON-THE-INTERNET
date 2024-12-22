import DataFetcher from "./DataFetcher";

interface User {
  id: number;
  name: string;
}

function Users() {
  return (
    <DataFetcher<User[]>
      url="https://jsonplaceholder.typicode.com/users"
      render={(data, isLoading, error) => {
        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error}</div>;

        return (
          <ul>
            {data?.map((user) => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        );
      }}
    />
  );
}

export default Users;
