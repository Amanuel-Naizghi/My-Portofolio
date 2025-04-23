import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Experience from './components/experience';
import ContactMe from './components/contact';
import { ThemeProvider } from './components/ThemeContext';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/experience' element={<Experience/>}/>
          <Route path='/contact' element={<ContactMe/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App;
