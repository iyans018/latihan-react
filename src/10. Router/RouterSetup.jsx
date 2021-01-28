import React from 'react';
// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// pages
import Home from './Home';
import About from './About';
import Blog from './Blog';
import DataItem from './DataItem';
import Person from './Person';
import ErrorPage from './ErrorPage';
// navbar
import Navbar from './Navbar';

const RouterSetup = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/data">
                    <DataItem />
                </Route>
                <Route path="/person/:slug">
                    <Person />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    )
}

export default RouterSetup;
