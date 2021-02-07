import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Appeared from './components/Appeared';
import Products from './components/Products';
import Suspicious from './components/Suspicious'; 
import Login from './components/Login';

const routes = [
    {
        path : '/',
        exact : true,
        main : () => <Home />
    },
    {
        path : '/about',
        exact : false,
        main : () => <About />
    },
    {
        path : '/contact',
        exact : false,
        main : () => <Contact />
    },
    {
        path : '/appeared',
        exact : false,
        main : () => <Appeared />
    },
    {
        path : '/absent-candidates',
        exact : false,
        main : () => <Products  />
    },
    {
        path : '/login',
        exact : false,
        main : ({location}) => <Login location={location} />
    }, 
    {
        path: '/suspicious', 
        exact: false, 
        main: () => <Suspicious />
    }
];

export default routes;
