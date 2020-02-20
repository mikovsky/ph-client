import React from "react";
import UsersTableItem from "./UsersTableItem";

const UsersTable = props => {

    const renderTableItems = () => props.users.map(user => <UsersTableItem key={user.id} user={user} handleDelete={props.handleDelete} />);

    return (
        <table className="ui celled table">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Repositories</th>
                    <th>Followers</th>
                    <th>Join Date</th>
                    <th>Profile</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {renderTableItems()}
            </tbody>
        </table>
    );
};

export default UsersTable;