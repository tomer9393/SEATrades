import React from "react";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import SearchBar from './components/header/search_bar';
import AboutUsPage from './components/aboutUsPage/aboutUsPage';
import ContactPage from './components/contactUsPage/contactUsPage.js';
import HowItWorks from './components/howItWorks/howItWorksPage.js';
import Events from './components/events/eventPage.js';
import PageNotFound from './components/404PageNotFound/404PageNotFound';
import SignInPage from "./components/signInPage/signInPage";
import SignUpPage from "./components/signUp/signUpPage";
import ProfilePage from "./components/profilePage/profilePage";
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
          <Route path="/Events" component={() => <Events />} />
          <Route path="/SignIn" component={() => <SignInPage />} />
          <Route path="/SignUp" component={() => <SignUpPage />} />
          <Route path="/Profile" component={() => <ProfilePage />} />
          <Route path="*" component={() => <PageNotFound />} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
