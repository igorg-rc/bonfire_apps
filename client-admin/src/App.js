import { Redirect, Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Technologies from './components/Pages/Technologies/Technologies';
import Industries from './components/Pages/Industries/Industries';
import Messages from './components/Messages/Messages';
import Login from './components/Login/Login';
import Table from './components/Pages/Table/Table';
import Error from './components/Error';
import { useState } from 'react';

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return ( <Route 
            path={path}
            {...rest}
            render={(props) => { return localStorage.getItem("authToken") ? <Comp {...props} /> : <Redirect to="/login" />
          }}
          />
  )
}

function App() {

  return (
    <div className="App">
      <div className="container">
        <main>
          <Switch>
            <ProtectedRoute path="/" component={Home} exact />
            <ProtectedRoute path="/technologies" component={Technologies} />
            <ProtectedRoute path="/industries" component={Industries} />
            <ProtectedRoute path="/messages" component={Messages} />
            <ProtectedRoute path="/table" component={Table} />
            <Route path="/login" component={Login} />
            <ProtectedRoute component={Error} />
          </Switch>
        </main>
      </div>
    </div>
  );
}

export default App;
