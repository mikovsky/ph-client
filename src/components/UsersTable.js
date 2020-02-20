import React, { useEffect, useReducer } from "react";
import UsersTableItem from "./UsersTableItem";
import { getAllUsers } from "../services/apiService";

const UsersTable = () => {
    const [state, dispatch] = useReducer((state, action) => ({ users: action.payload }), { users: [] });

    useEffect(() => {
        (async () => {
            const allUsers = await getAllUsers();
            dispatch({ payload: allUsers });
        })();
    }, []);

    const renderTableItems = () => state.users.map(user => <UsersTableItem key={user.id} user={user} />);

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Repositories</th>
                    <th>Followers</th>
                    <th>Join Date</th>
                    <th>Profile</th>
                </tr>
            </thead>
            <tbody>
                {renderTableItems()}
            </tbody>
        </table>
    );
};

export default UsersTable;