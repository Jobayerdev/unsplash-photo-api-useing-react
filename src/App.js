import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import './App.css'
import Header from './Components/Header'
import LatestPhotos from './Components/LatestPhotos'
import Footer from './Components/Footer'
import About from './Components/About'
import Disclaimer from './Components/Disclaimer'
import Credits from './Components/Credits'

function App() {
    return(
       <Router>
          <React.Fragment>
              <Header/>
                <Route path="/" exact component={LatestPhotos}/>
                <Route path="/about" exact component={About}/>
                <Route path="/Disclaimer" exact component={Disclaimer}/>
                <Route path="/Credits" exact component={Credits}/>
              <Footer/>
          </React.Fragment>
       </Router>
  )
}
export default App;