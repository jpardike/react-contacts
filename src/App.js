// Import Order
// React
// Other 3rd part modules
// Custom modules (components)
// config variables
// css

import React from "react";
import { Switch, Route } from 'react-router-dom';

import Navbar from "./components/Navbar";
import ContactsPage from './pages/ContactsPage';
import ContactDetailPage from './pages/ContactDetailPage';
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path='/contacts/:id' component={ContactDetailPage} />
          <Route path='/contacts' component={ContactsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
