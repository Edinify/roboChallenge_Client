import React from "react";
import Header from "./components/Header/Header";
import Register from "./components/Register/Register";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Announcement from "./components/Announcement/Announcement";
import ChallengeTime from "./components/ChallengeTime/ChallengeTime";
import Footer from "./components/Footer/Footer";

const EnterPage = () => {
  return (
    <div className="enter-page">
      <Header />
      <Register />
      <Home />
      <AboutUs />
      <Gallery />
      <Announcement />
      <ChallengeTime/>
      <Footer/>
    </div>
  );
};

export default EnterPage;
