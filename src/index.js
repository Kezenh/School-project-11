import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Logement from './pages/Logement'
import APropos from './pages/APropos'
import Error from './pages/Error'
import "./styles/Index.css"
import Header from "./components/Header"
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <Router basename="/School-project-11">
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/logement/:id' element={<Logement />} />
        <Route exact path='/apropos' element={<APropos />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)