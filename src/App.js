import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Blogs from './pages/Blogs/Blogs';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Portfolio from './pages/Portfolio/Portfolio';
import Projects from './pages/Projects/Projects';
import Footer from './pages/Shared&minifier/Footer/Footer';
import Header from './pages/Shared&minifier/Header/Header';
import ScrollTopOnRouteChange from './pages/Shared&minifier/ScroolTopOnRouteChange/RouteChangeFromTop';

const ActiveNavContext = createContext();
function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  return (
    <div>
      <ActiveNavContext.Provider value={[activeCategory, setActiveCategory]}>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/about' element={<AboutMe />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/projects' element={<Projects />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
        <Footer />
        <ScrollTopOnRouteChange />
      </ActiveNavContext.Provider>
    </div>
  );
}

export { App , ActiveNavContext  };
