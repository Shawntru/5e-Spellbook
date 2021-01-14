import './App.scss';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Homepage/Homepage';
import SpellSearch from '../SpellSearch/SpellSearch';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          exact
          path="/spells/:pcClass"
          render={() => {
            return <SpellSearch />;
          }}
        />
      </Switch>
    </div>
  );
};

export default App;
