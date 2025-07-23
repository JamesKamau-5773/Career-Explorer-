import React from 'react'
import { BrowserRouter} from 'react-router-dom';    
import Home from'./components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import CareerCard from './components/CareerCard';
import CareerList from './components/CareerList';
import './App.css';


function App() {
  return (
    <Router>
     <Header/>
        <main>
          <Route path="/" element={Home} />
          <Route path="/Search" element={CareerForm} />
          <Route path="/careers" element={<CareerList careers={[]} searchCriteria={{}} />}/>
          <Route path="/contact" element={Contact} />
        </main>
     <Footer/>

    </Router>
  )
}

export default App