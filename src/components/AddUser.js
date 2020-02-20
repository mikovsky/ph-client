import React from "react";

const AddUser = props => {
    return (
        <form className="ui form" onSubmit={event => props.handleSubmit(event)}>
            <div className="field">
                <label>Add Github User</label>
                <input onChange={event => props.handleChange(event)} value={props.username} type="text" name="username" placeholder="Type Github Username here..." />
            </div>
            <input type="submit" value="Add User" className="ui primary button" />
        </form>
    );
};

export default AddUser;