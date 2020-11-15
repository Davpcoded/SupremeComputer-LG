import React from "react";
import AboutSection from "../components/AboutSection";
import Cards from "../components/Cards";
import Carousel from "../components/Carousel";
import LogoIntroBanner from "../components/LogoIntroBanner";
import NavBar from "../components/NavBar";
import GoogleMaps from "../components/GoogleMaps";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div style={{ width: "fit-content" }}>
      <LogoIntroBanner />
      <NavBar />
      <Carousel />
      <Cards />
      <AboutSection />
      <GoogleMaps />
      <FeedbackSection />
      <Footer />
    </div>
  );
}
