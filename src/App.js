import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Services />
      <Resume />
      <Contact />
      <Navigation />
    </div>
  );
}

export default App;
