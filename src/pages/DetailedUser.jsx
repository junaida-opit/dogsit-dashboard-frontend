import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/users";

export default function DetailedUser() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUserById(userId);
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setError("Failed to load user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

  if (loading) {
    return <p className="text-center mt-10">Loading user...</p>;
  }

  if (error) {
    return <p className="text-center mt-10 text-red-500">{error}</p>;
  }

  if (!user) {
    return <p className="text-center mt-10">No user found.</p>;
  }

  return (
    <div className="min-h-full space-y-6 p-6 bg-white rounded-2xl shadow">
      <h1 className="text-2xl font-semibold">{user.name}</h1>
      <p>
        <span className="font-medium">Email:</span> {user.email}
      </p>
      <p>
        <span className="font-medium">Role:</span> {user.role}
      </p>
      <p>
        <span className="font-medium">Active:</span>{" "}
        {user.isActive ? "Yes" : "No"}
      </p>
      <p>
        <span className="font-medium">Other Information:</span> Coming Soon!
      </p>
      {/* Add more fields as needed */}
    </div>
  );
}
