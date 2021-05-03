import React from "react";
import Header from './components/header/header';
import Footer from './components/footer/footer';
import HomePage from './components/homePage/homePage';
import AboutUsPage from './components/aboutUsPage/aboutUsPage';
import ContactPage from './components/contactUsPage/contactUsPage.js';
import HowItWorks from './components/howItWorks/howItWorksPage.js';
import EventsList from './components/events/eventList/eventList';
import EventDetails from './components/events/eventDetails/eventDetails';
import CategoryPage from './components/categoryPage/categoryPage';
import SearchListPage from './components/searchPage/searchListPage'
import PageNotFound from './components/404PageNotFound/404PageNotFound';
import SignInPage from "./components/signInPage/signInPage";
import SignUpPage from "./components/signUp/signUpPage";
import ProfilePage from "./components/profilePage/profilePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useAuth } from "./components/hooks/auth-hook";
import { AuthContext } from "./components/context/auth-context";

function App() {
  const { token, login, logout, userId } = useAuth();

  const routes = token ? (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/Category/:name"> 
        <CategoryPage />
      </Route>
      <Route path="/EventsList/:name">
        <EventsList />
      </Route>
      <Route path="/EventDetails/:id">
        <EventDetails />
      </Route>
      <Route path="/AboutUs">
        <AboutUsPage />
      </Route>
      <Route path="/Contact">
        <ContactPage />
      </Route>
      <Route path="/HowItWorks">
        <HowItWorks />
      </Route>
      <Route path="/Search" component={(props) => <SearchListPage {...props}/>} />
      <Route path="/Profile" exact>
        <ProfilePage />
      </Route>
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/Category/:name"> 
        <CategoryPage />
      </Route>
      <Route path="/EventsList/:name">
        <EventsList />
      </Route>
      <Route path="/EventDetails/:id">
        <EventDetails />
      </Route>
      <Route path="/AboutUs">
        <AboutUsPage />
      </Route>
      <Route path="/Contact">
        <ContactPage />
      </Route>
      <Route path="/HowItWorks">
        <HowItWorks />
      </Route>
      <Route path="/SignIn">
        <SignInPage />
      </Route>
      <Route path="/SignUp">
        <SignUpPage />
      </Route>
      <Route path="/Profile" exact>
        <ProfilePage />
      </Route>
      <Route path="/Search" component={(props) => <SearchListPage {...props}/>} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userId: userId,
          login: login,
          logout: logout,
        }}
      >
        <BrowserRouter basename="/">
          <Header />
          <main>{routes}</main>
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
