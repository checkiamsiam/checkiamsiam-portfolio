import { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { projectFour, projectOne, projectThree, projectTwo } from './FakeData/All Project/AllProject';
import { featuredProjectOne, featuredProjectThree, featuredProjectTwo } from './FakeData/FeaturedProjects/FeaturedProjects';
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
  const projects = [featuredProjectThree, featuredProjectTwo , featuredProjectOne , projectOne, projectTwo, projectThree, projectFour];
  const [showing, setShowing] = useState(projects)
  const featured = projects.filter(project => project.featured === true).reverse()
  return (
    <div>
      <ActiveNavContext.Provider value={{activeCategory, setActiveCategory , projects ,  showing , setShowing , featured}}>
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
