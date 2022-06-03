import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import cubeImage from './cube-image.jpeg'


function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route />
        <Route />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

// function App() {
//   return (
//     <div className="App">
//       {/*<img className='cover-image' src={cubeImage} />*/}
//       <Navigation />
//       <HomePage />
//       <Services />
//       <Resume />
//     </div>
//   );
// }

export default App;
