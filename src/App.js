import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { SignIn } from './components/auth/SignIn';
export default function App () {
  return (
      <Router>
        <Routes>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/dashboard"  component={Dashboard} />
        </Routes>
      </Router>
  )
}
