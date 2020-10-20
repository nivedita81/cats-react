import React from 'react';
import Content from './Content'
import EditDetail from './EditDetail'
import { Route, Switch } from 'react-router-dom';
import './index.css'

function App() {

  return (
      <div className="container">
        <h1>Paws Rescue Center <span role='image' aria-label="paws">🐾</span></h1>
          <Switch>
            <Route exact path='/cats' component={Content} />
            <Route exact path='/cats/:id' component={EditDetail} />
          </Switch>
      </div>
  );
}

export default App;
