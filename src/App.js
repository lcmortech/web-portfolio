import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import cubeImage from './cube-image.jpeg'

function App() {
  return (
    <div className="App">
      <img className='cover-image' src={cubeImage} />
      <HomePage />
      <Services />
      <Resume />
      <Contact />
      <Navigation />
    </div>
  );
}

export default App;
