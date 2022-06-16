import React from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import List from './pages/list/List';
import Login from './pages/login/Login';
import New from './pages/new/New';
import Single from './pages/single/Single';
const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} exact/>
            <Route path='/Login' element={<Login />} exact/>
            <Route path='users'>
              <Route index element={<List/>} exact/>
              <Route path=':userId' element={<Single/>} exact/>
              <Route path='new' element={<New/>} exact/>
            </Route>
            <Route path="products">
              <Route index element={<List/>} exact/>
              <Route path=':productId' element={<Single/>} exact/>
              <Route path='new' element={<New/>} exact/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App;