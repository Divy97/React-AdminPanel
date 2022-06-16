import React from 'react';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import Single from './pages/single/Single';
const App = () => {
  return (
    <div>
      <Home />
      <List />
      <Login />
      <Single />
    </div>
  )
}

export default App;