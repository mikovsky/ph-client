import React from "react";
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import UsersTable from "./UsersTable";

const App = () => {
    return (
        <Router>
            <div className="ui secondary pointing menu">
                <NavLink to="/users" activeClassName="active" className="item">Users</NavLink>
                <NavLink to="/repositories" activeClassName="active" className="item">Repositories</NavLink>
            </div>
            <div className="ui container segment">
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/users" />
                    </Route>
                    <Route path="/users">
                        <UsersTable />
                    </Route>
                    <Route path="/repositories">
                        <h2>Repositories Page</h2>
                    </Route>
                    <Route path="/*">
                        <h3>404 - Page Not Found</h3>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;