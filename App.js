import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import TourDetails from './components/TourDetails';
import AddTour from './components/AddTour';
import Login from './components/Login';
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tours/:id" component={TourDetails} />
        <Route path="/add-tour" component={AddTour} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;