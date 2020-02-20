import axios from "axios";

const client = axios.create({
    baseURL: "http://localhost:8080/api",
    timeout: 1000
});

export const getAllUsers = async () => {
    const response = await client.get("/users");
    const users = response.data;
    return users;
};