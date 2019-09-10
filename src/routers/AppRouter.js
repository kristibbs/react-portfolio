import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import 'normalize.css';
import Home from '../components/Home';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Contact from '../components/Contact';
import About from '../components/About';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />
    <div className="wrapper">
    <Switch>
        <Route path='/' component={Home} exact={true} />
        <Route path='/portfolio' component={Portfolio} exact={true} />
        <Route path='/portfolio/:id' component={PortfolioItem} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
        <Route component={NotFoundPage} />
    </Switch>
    </div>
    <Footer />
    </div>
    </BrowserRouter>
);
export default AppRouter;