import logo from './logo.svg';
import './App.css';
import Section1And2 from './components/Section1And2';
import HeadSection from './components/HeadSection';
import LoadingCover from './components/LoadingCover';
import React, { useState } from 'react'
import AboutSection from './components/AboutSection';
import GoogleAd from './components/GoogleAd';
import ErrorBoundary from './components/ErrorBoundary';


function App() {

  const [coverUp,setCoverUp] =useState(false)

  const [defaultSelection,changeDefaultSelection] =useState(true)

  function headClick(){

    changeDefaultSelection(true);

  }

  function aboutClick(){

    changeDefaultSelection(false)

  }

  return (
    <div className="App">

      {(coverUp)? <LoadingCover></LoadingCover> : <div></div>}

      <HeadSection headClick={headClick} aboutClick={aboutClick} />
      
      {defaultSelection ? <Section1And2 coverFunc={setCoverUp} /> : <AboutSection></AboutSection>}
      
    </div>
  );
}

export default App;