import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import axios from "axios";

function App() {
  const [state, setstate] = useState([]);

  const getData = function(text) {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${text}`)
      .then(data => data.data)
      .then(res => setstate(res.items));
  };

  const search = input => {
    getData(input);
  };

  return (
    <div className="App">
      <CssBaseline />
      <Container maxWidth="sm">
        <Header search={search} />
      </Container>
      <Container>
        <HomePage items={state} />
      </Container>
    </div>
  );
}

export default App;
