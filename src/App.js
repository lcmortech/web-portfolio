import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Services />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
