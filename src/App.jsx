import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <article>
      <Header />
      <Hero />
      <Main />
      <Footer />
    </article>
  );
}

export default App;
