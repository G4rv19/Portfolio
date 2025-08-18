import './App.css';
import Navbar from './components/navbar';
import Section1 from './components/section1';
import Section2 from './components/section2';
import Section3 from './components/section3';

function App() {
  return (
    <div className="App">
      {/* Navbar component with links */}
      <Navbar
        links={[
          { href: "#home", label: "Home" },
          { href: "#work", label: "Work" },
          { href: "#projects", label: "Projects" },
          { href: "#contact", label: "Contact" },
        ]}
      />
      
      {/* Sections of the page */}
      <section id="home">
        <Section1 />
      </section>
      <section id="about">
        <Section2 />
      </section>
      <section id="projects">
        <Section3 />
      </section>
    </div>
  );
}

export function Main() {
  return (
    <div className="main">
      <Navbar />
      {/* Main content sections */}     
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
