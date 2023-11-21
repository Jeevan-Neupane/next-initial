import Link from "next/link";

async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}
async function Users() {
  const users = await getUsers();
  console.log(users);

  return (
    <div className='bg-slate-950 w-full min-h-screen text-white flex gap-10 pt-4'>
      {users.map((user) => {
        return (
          <div
            key={user.id}
            className='h-32 w-32 flex items-center justify-center mb-2 bg-green-600 '
          >
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
