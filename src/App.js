import React from "react";
import Heading from "./Heading.js";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage.js";
import { DetailPage } from "./pages/DetailPage/DetailPage.js";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    return (
        <div className="mainWrapper">
            <Router>
                <Switch>
                    <Route path="/" exact component={HomePage} />
                    <Route path="/foodDetails/:id" component={DetailPage} />
                </Switch>
            </Router>
        </div>
    );
};

export default App;
