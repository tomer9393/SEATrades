import React from "react";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import SearchBar from './components/header/search_bar';
import AboutUsPage from './components/aboutUsPage/aboutUsPage';
import ContactPage from './components/contactUsPage/contactUsPage.js';
import HowItWorks from './components/howItWorks/howItWorksPage.js';
import PageNotFound from './components/404PageNotFound/404PageNotFound';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
        <BrowserRouter basename="/">
        <Header />
        
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/AboutUs" component={() => <AboutUsPage />} />
          <Route path="/Contact" component={() => <ContactPage />} />
          <Route path="/HowItWorks" component={() => <HowItWorks />} />
          <Route path="" component={() => <PageNotFound />} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
