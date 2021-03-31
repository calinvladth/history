import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";
// import Navigation from "../navigation";
import {PresentationPath} from "./portfolio_detailed/path";
import PresentationPage from "./portfolio_detailed";
import HomePage from "./home";
import {HomePath} from "./home/path";

const supportsHistory = 'pushState' in window.history;

const PresentationLayout = () => (
    <BrowserRouter forceRefresh={!supportsHistory}>
        <div>
            {/*<Navigation/>*/}
            <main>
                <Route
                    render={({location}) => {
                        return (

                            <Route
                                location={location}
                                render={() => (
                                    <Switch>
                                        {/*  Home Page */}
                                        <Route
                                            path={HomePath}
                                            component={HomePage}
                                            exact
                                        />
                                        <Route path={PresentationPath} component={PresentationPage}/>
                                    </Switch>
                                )}
                            />
                        );
                    }}
                />
            </main>
        </div>

    </BrowserRouter>
)

export default PresentationLayout;
