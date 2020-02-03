import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import UrlBoard from './components/UrlBoard';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <UrlBoard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
