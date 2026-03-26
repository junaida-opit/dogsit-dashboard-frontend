import { useEffect, useState } from "react";
import { getUsers } from "../api/users";
import { useNavigate } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (user) => {
    navigate(`/users/${user.id}`);
  };

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
          <th className="hidden md:flex">Email</th>
          <th>Role</th>
          <th>Active</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr
            onClick={() => handleClick(user)}
            key={user.id}
            className="border-t text-gray-800 border-gray-300 cursor-pointer hover:bg-gray-100 transition [&_td]:py-4 [&_td]:text-center"
          >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td className="hidden md:flex">{user.email}</td>
            <td className="">{user.role}</td>
            <td>{user.isActive ? "Yes" : "No"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
