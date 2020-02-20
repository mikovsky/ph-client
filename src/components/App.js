import React from "react";
import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import UsersPage from "../pages/UsersPage";

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
                        <UsersPage />
                    </Route>
                    <h2>Repositories Page</h2>
                    <Route path="/repositories">
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