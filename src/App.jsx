import React from 'react'
import { Route, Switch } from 'wouter'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Resources from './pages/Resources'
import Timetable from './pages/Timetable'
import SubmissionDashboard from './pages/SubmissionDashboard'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'

export default function App(){
  return (
    <ThemeProvider>
      <div className="app-root">
        <Navbar />
        <main className="container">
          {/* IMPORTANT: Base path added for GitHub Pages */}
          <Switch base="/submission-site">
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/resources" component={Resources} />
            <Route path="/timetable" component={Timetable} />
            <Route path="/dashboard" component={SubmissionDashboard} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="/404" component={NotFound} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
