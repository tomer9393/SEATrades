import React from "react";
import { useState , useEffect } from "react";
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
import CheckoutPage from "./components/checkoutPage/checkout";
import { BrowserRouter, Route, Switch , Redirect} from "react-router-dom";
import { useAuth  } from "./components/hooks/auth-hook";
import { UserProfile, UserNull } from "./components/hooks/profile-hook";
import { AuthContext } from "./components/context/auth-context";
import  MyTicketsPage  from "./components/MyTicketsPage/MyTicketsPage";
import  MySEATradesPage  from "./components/mySEATradesPage/mySEATradesPage";
import "../src/App.css"


function App() {
  const { token, login, logout, userId } = useAuth();

  const routes = token ? (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/Category/:name" component={(props) => <CategoryPage {...props}/>} />
      <Route path="/EventsList/:name" component={(props) => <EventsList {...props}/>} />
      <Route path="/EventDetails/:id" component={(props) => <EventDetails {...props}/>} />
      <Route path="/AboutUs">
        <AboutUsPage />
      </Route>
      <Route path="/Contact" component={(props) => <ContactPage {...props}/>}/>
      <Route path="/HowItWorks">
        <HowItWorks />
      </Route>
      <Route path="/Checkout" exact>
        <CheckoutPage />
      </Route>
      <Route path="/Search" component={(props) => <SearchListPage {...props}/>} />
      <Route path="/Profile" exact>
        <ProfilePage />
      </Route>
      <Route path="/SignIn"><Redirect to="Profile" /></Route>
      <Route path="/SignUp"><Redirect to="Profile" /></Route>
      <Route path="/MyTickets" component={(props) => <MyTicketsPage {...props}/>} />
      <Route path="/mySEATrades" component={(props) => <MySEATradesPage {...props}/>} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  ) : (
    <Switch>
      <Route path="/" exact>
        <HomePage />
      </Route>
      <Route path="/Category/:name" component={(props) => <CategoryPage {...props}/>} />
      <Route path="/EventsList/:name" component={(props) => <EventsList {...props}/>} />
      <Route path="/EventDetails/:id" component={(props) => <EventDetails {...props}/>} />
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
      <Route path="/Profile">
         <SignInPage />
      </Route>
      <Route path="/MyTickets" exact>
        <SignInPage />
      </Route>
      <Route path="/mySEATrades" exact>
        <SignInPage />
      </Route>
      <Route path="/Search" component={(props) => <SearchListPage {...props}/>} />
      <Route path="*">
        <PageNotFound />
      </Route>
    </Switch>
  );

  if(!!token === true){
    var userProfile = UserProfile(userId);
  }else{
    UserNull();
  }
  

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
          
          <Header user={userProfile} />
          <main>{routes}</main>
          <hr style={{width: '70%'}}></hr> 
          <Footer />
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
