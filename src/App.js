import React, { useState } from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import Login from './components/Login'
import BubblesPage from './components/BubblePage'
import './styles.scss'

import { axiosWithAuth } from './helpers/axiosWithAuth'
import PrivateRoute from './components/PrivateRoute'

function App() {

  const logout = () => {
    axiosWithAuth()
      .post('/logout')
      .then(res => {
        localStorage.removeItem('token')
        window.location.href='/'
        console.log('logged out! ', res)
      })
      .catch(err => {
        console.log('cant log out! ', err)
      })
  }

  return (
    <Router>
      <div className='App'>
        <header>
          Color Picker Sprint Challenge
          <Link
            data-testid='logoutButton'
            to='/'
            onClick={logout}
          >logout</Link>
        </header> 

        <Route exact path='/' component={Login} />
        <PrivateRoute exact path='/protected' component={BubblesPage} />
      </div>
    </Router>
  )
}

export default App

//Task List:
//1. Render BubblePage as a PrivateRoute
//2. Build the logout button to remove the localStorage Item.