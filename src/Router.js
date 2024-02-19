import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Pathway from './Pathway';

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" component={Home} />
                <Route path="/pathway/:id" component={Pathway} />
            </Routes>
        </Router>
    );
};

export default AppRouter;