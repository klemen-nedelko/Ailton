import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import { AuthContextProvider } from './components/context/AuthContext';
import { Dashboard } from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Signin from './components/Signin';
import Signup from './components/Signup';

export default function App () {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route  path="/Dashboard" exact element={
          <ProtectedRoute>
            <Dashboard/>
          </ProtectedRoute>
          } />
          <Route  path="/account" exact element={
          <ProtectedRoute>
            <Account/>
          </ProtectedRoute>
          } />
        </Routes>
      </Router>
      </AuthContextProvider>
  )
}
