const fetchUser = async (id) => {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
};

async function Users({ params }) {
  const userData = await fetchUser(params.id);
  console.log(userData);
  return (
    <div>
      <h2>User Details</h2>
      <p>name:{userData?.name}</p>
      <p>age:{userData?.age}</p>
      <p>email:{userData?.email}</p>
    </div>
  );
}

export default Users;
