import React from "react";
import moment from "moment";
import GithubIcon from "../assets/github.svg";

const UsersTableItem = props => {
    const { username, name, avatarUrl, publicRepositories, followers, createdAt, htmlUrl } = props.user;

    return (
        <tr>
            <td>
                <h4 className="ui image header">
                    <img src={avatarUrl} className="ui mini rounded image" alt="Users avatar" />
                    <div className="content">
                        {username}
                        <div className="sub header">{name}</div>
                    </div>
                </h4>
            </td>
            <td>{publicRepositories}</td>
            <td>{followers}</td>
            <td>{moment(createdAt).format("MMMM Do YYYY")}</td>
            <td>
                <div className="ui center aligned">
                    {/* eslint-disable-next-line */}
                    <a href={htmlUrl} target="_blank"><img src={GithubIcon} style={{ maxWidth: "20px" }} alt="" /></a>
                </div>
            </td>
            <td className="ui center aligned">
                <button onClick={() => props.handleDelete(username)} className="ui negative basic button">Delete</button>
            </td>
        </tr>
    );
};

export default UsersTableItem;