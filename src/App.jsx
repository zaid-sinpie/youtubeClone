import './App.css';
import Navbar from './components/Navbar.jsx';
import Section from './components/Section.jsx';
import SidebarLogos from './components/SidebarLogos.jsx';
import Videos from './components/Videos.jsx';

function App() {

  return (
    <>
    <Navbar></Navbar>
    {<SidebarLogos/>}
    <Section>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
      <Videos></Videos>
    </Section>
    </>
  )
}

export default App
