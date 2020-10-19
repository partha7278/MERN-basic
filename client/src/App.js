import React from 'react';
import ErrorBoundary from './components/ErrorBoundry';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Users from './components/Users';



const App = () => (

    <ErrorBoundary>
        <ToastContainer />
        <BrowserRouter>
            <Switch>
                <Route path="/friends" exact component={Users} />
                <Route path="/friends2" exact component={Users} />
                <Route path="/" component={Users} />
            </Switch>
        </BrowserRouter>
    </ErrorBoundary>
    
);

export default App;