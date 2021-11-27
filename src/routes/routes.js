import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";
import Home from "../pages/home";
import PracticeAct from "../pages/ACT-AM/practice";
import LoadActam from "../pages/ACT-AM";
import TwoPlayerAct from "../pages/ACT-AM/two-player";

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route path="/act-am-practice">
                <PracticeAct />
            </Route>

            <Route path="/act-am-game">
                <TwoPlayerAct />
            </Route>
            <Route path="/coming-soon">
                <h1>
                    Coming soon
                </h1>

            </Route>

            <Route path="/pre">
                <LoadActam />
            </Route>
        </Switch>
    )
}

export default Routes