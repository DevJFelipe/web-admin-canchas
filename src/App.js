import './App.css';
import NavBar from './components/NavBar';
import Banner from './components/Banner';
import Benefits from './components/Benefits';
import Sponsors from './components/Sponsors';
import ColombiaPresence from './components/ColombiaPresence';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Benefits />
      <Sponsors />
      <ColombiaPresence />
      <Footer />
    </div>
  );
}

export default App;
