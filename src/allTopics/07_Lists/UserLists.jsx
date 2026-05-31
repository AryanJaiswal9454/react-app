const UserLists = () => {
  const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Clark" },
    { id: 3, name: "Jane" },
    { id: 4, name: "Henry" },
    { id: 5, name: "Bruce" },
  ];

  return (
    <>
      <h1>Learn Lists in React</h1>
      {users.map((user) => {
        return (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        );
      })}
    </>
  );
};

export default UserLists;
