import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";

// Import des pages
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
