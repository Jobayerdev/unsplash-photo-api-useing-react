import React from 'react';
import './App.css'
import Header from './Components/Header'
import LatestPhotos from './Components/LatestPhotos'
import Footer from './Components/Footer'

function App() {
    return(
            <React.Fragment>
              <Header/>
              <LatestPhotos/>
              <Footer/>
            </React.Fragment>
      )
}
export default App;