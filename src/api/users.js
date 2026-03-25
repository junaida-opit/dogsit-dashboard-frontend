import axios from "./axios";

// Fetch all users
export const getUsers = async () => {
  const response = await axios.get("/users");
  return response.data;
};

// Fetch single user
export const getUserById = async (id) => {
  const response = await axios.get(`/users/${id}`);
  return response.data;
};
