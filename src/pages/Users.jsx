import { useEffect, useState } from "react";
import { getUsers } from "../api/users";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        setUsers(data);
      } catch (err) {
        console.error("Failed to fetch users:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading users...</p>;

  return (
    <table className="w-full border-collapse ">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            key={user.id}
            className="border-t text-gray-800 border-gray-300 cursor-pointer hover:bg-gray-100 transition [&_td]:py-4 [&_td]:text-center"
          >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td className="">{user.role}</td>
            <td>{user.isActive ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
