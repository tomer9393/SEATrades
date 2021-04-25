import React from "react";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import AboutUsPage from './components/aboutUsPage/aboutUsPage';
import ContactPage from './components/contactUsPage/contactUsPage.js';
import HowItWorks from './components/howItWorks/howItWorksPage.js';
import EventsList from './components/events/eventList/eventListPage';
import Events from './components/events/event/eventPage2';
import CategoryPage from './components/categoryPage/categoryPage';
import PageNotFound from './components/404PageNotFound/404PageNotFound';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter basename="/">
        <Header />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Category/:name" component={() => <CategoryPage />} />
          <Route path="/AboutUs" component={() => <AboutUsPage />} />
          <Route path="/Contact" component={() => <ContactPage />} />
          <Route path="/HowItWorks" component={() => <HowItWorks />} />
          <Route path="/EventsList" component={() => <EventsList />} />
          <Route path="/Events/artists/:artist" component={() => <Events />} />
          <Route path="" component={() => <PageNotFound />} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
