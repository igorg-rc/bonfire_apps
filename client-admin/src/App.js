import { Route, Switch } from 'react-router-dom';

import './App.css';

import Layout from './components/Layout/Layout';
import Home from './components/Pages/Home/Home';
import Technologies from './components/Pages/Technologies/Technologies';
import Industries from './components/Pages/Industries/Industries';
import Messages from './components/Messages/Messages';
import Login from './components/Login/Login';
import Table from './components/Pages/Table/Table';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/technologies" component={Technologies} />
            <Route path="/industries" component={Industries} />
            <Route path="/messages" component={Messages} />
            <Route path="/table" component={Table} />
            <Route path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </main>
      </div>

    </div>
  );
}

export default App;
