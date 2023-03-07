import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Account from './components/Account';
import Cailton from './components/Cailton/Cailton';
import { AuthContextProvider } from './components/context/AuthContext';
import { Dashboard } from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import Sailton from './components/Sailton/Sailton';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Wailton from './components/Wailton/Wailton';

export default function App () {
  return (
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Signin/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/cailton" element={<Cailton/>} />
          <Route exact path="/Sailton" element={<Sailton/>} />
          <Route exact path="/Wailton" element={<Wailton/>} />
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
