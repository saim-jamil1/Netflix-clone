import React from 'react'
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner.js'
import Navbar from './Navbar.js'

function App() {
  return (
    <div className="App">
    

    <Navbar/>
    <Banner/>
      <Row 
        title='Netflix Originals' 
        fetchUrl = {requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row 
        title='Trending Now' 
        fetchUrl = {requests.fetchTrending}
      />
     <Row 
        title='Top Rated' 
        fetchUrl = {requests.fetchTopRated}
      />
      <Row 
        title='Action Movies' 
        fetchUrl = {requests.fetchActionMovies}
      />
      <Row 
        title='Horror Movies' 
        fetchUrl = {requests.fetchHorrorMovies}
      />
      <Row 
        title='Comedy Movies' 
        fetchUrl = {requests.fetchComedyMovies}
      />
      <Row 
        title='Romance Movies' 
        fetchUrl = {requests.fetchRomanticMovies}
      />
      <Row 
        title='Documentries' 
        fetchUrl = {requests.fetchDocumentaries}
      />
      
      
    </div>
  );
}

export default App;
 