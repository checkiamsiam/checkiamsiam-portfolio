import React, { createContext, useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { projectFour, projectOne, projectThree, projectTwo } from './FakeData/All Project/AllProject';
import { featuredProjectOne, featuredProjectThree, featuredProjectTwo } from './FakeData/FeaturedProjects/FeaturedProjects';
const ProjectDetail = lazy(() => import('./pages/Details/Details'));
const Loader = lazy(() => import('./pages/Shared&minifier/Loader/Loader'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe'));
const Blogs = lazy(() => import('./pages/Blogs/Blogs'));
const Contact = lazy(() => import('./pages/Contact/Contact'));
const Home = lazy(() => import('./pages/Home/Home'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const Footer = lazy(() => import('./pages/Shared&minifier/Footer/Footer'));
const Header = lazy(() => import('./pages/Shared&minifier/Header/Header'));
const ScrollTopOnRouteChange = lazy(() => import('./pages/Shared&minifier/ScroolTopOnRouteChange/RouteChangeFromTop'));


const ActiveNavContext = createContext();
function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const projects = [featuredProjectThree, featuredProjectTwo, featuredProjectOne, projectOne, projectTwo, projectThree, projectFour];
  const [showing, setShowing] = useState(projects)
  const featuredProject = projects.filter(project => project.featured === true).reverse()
  return (
    <div className='app'>
      <ActiveNavContext.Provider value={{ activeCategory, setActiveCategory, projects, showing, setShowing, featured: featuredProject }}>
        <Header></Header>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<AboutMe />}></Route>
            <Route path='/projects' element={<Projects />}></Route>
            <Route path='/projects/:route' element={<ProjectDetail />}></Route>
            <Route path='/blogs' element={<Blogs />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </Suspense>
        <Footer />
        <ScrollTopOnRouteChange />
      </ActiveNavContext.Provider>
    </div>
  );
}

export { App, ActiveNavContext };
