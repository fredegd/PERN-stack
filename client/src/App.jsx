import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import Paginator from "./components/Paginator";
import BookDetails from "./components/BookDetails";
import InputForm from "./components/InputForm";
import "./App.css";


function App() {
  return (
    <>
      <Navigation />
      <div className="pages">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/books" element={<Paginator />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/insert-book" element={<InputForm />} />
      </Routes>
      </div>
      
    </>
  );
}

export default App;
