import { Intro } from "./Components/Intro/intro";
import { Navbar } from "./Components/NavBar/navbar";
import Skills from "./Components/Skills/skills";
import Resume  from "./Components/Resume/resume"
import { Contact }from "./Components/Contact/contact";
import { Footer } from "./Components/Footer/footer";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
