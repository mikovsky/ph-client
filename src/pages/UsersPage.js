import React, { useEffect, useReducer, useState } from "react";
import AddUser from "../components/AddUser";
import UsersTable from "../components/UsersTable";
import { addUser, deleteUser, getAllUsers } from "../services/apiService";

const UsersPage = () => {
    const [state, dispatch] = useReducer((state, action) => ({ users: action.payload }), { users: [] });
    const [username, setUsername] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        dispatch({ payload: await getAllUsers() });
    };

    const handleChange = event => {
        setUsername(event.target.value);
    };

    const handleAddUser = async event => {
        event.preventDefault();
        await addUser(username);
        setUsername("");
        dispatch({ payload: await getAllUsers() });
    };

    const handleDeleteUser = async (username) => {
        await deleteUser(username);
        dispatch({ payload: await getAllUsers() });
    };

    return (
        <>
            <AddUser handleChange={handleChange} handleSubmit={handleAddUser} username={username} />
            <div className="ui segment">
                <h2 className="ui right floated header">Registered Users List</h2>
                <div className="ui clearing divider" />
                <UsersTable users={state.users} handleDelete={handleDeleteUser} />
            </div>
        </>
    );
};

export default UsersPage;