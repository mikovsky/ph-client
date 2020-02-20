import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 1000
});

export const getAllUsers = async () => {
    const response = await client.get("/users");
    return response.data;
};

export const addUser = async (username) => {
    const response = await client.post(`/users/${username}`);
    return response.data;
};

export const deleteUser = async (username) => {
    const response = await client.delete(`/users/${username}`);
    return response.data;
};