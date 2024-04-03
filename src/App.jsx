import { useState } from 'react';

import './App.css';
import Navbar from './components/Navbar.jsx';
import SidebarLogos from './components/SidebarLogos.jsx';
import Section from './components/Section.jsx';
import Videos from './components/Videos.jsx';
import Shorts from './components/Shorts.jsx';
import SectionShorts from './components/SectionShorts.jsx';

function App() {

  return (
    <>
    <Navbar></Navbar>
    {<SidebarLogos/>}
    {/* {<Section>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
      <Videos/>
    </Section>} */}
    {/* <SectionShorts>
      <Shorts />
      <Shorts />
      <Shorts />
    </SectionShorts> */}
    </>
  )
}

export default App
