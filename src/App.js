import "./App.css";
import Navbar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import React, { useState } from "react";

const App = () => {
  const [progress, setProgress] = useState(0);

  const setProgessBar = (progressValue) => {
    setProgress(progressValue);
  };

  return (
    <div className="App">
      <Router>
        <LoadingBar height={3} color="#f11946" progress={progress} />

        <Navbar />

        <Routes>
          <Route
            exact
            path="/"
            element={<News setProgressBar={setProgessBar} category="general" />}
          />
          <Route
            exact
            path="/general"
            element={
              <News
                setProgressBar={setProgessBar}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                setProgressBar={setProgessBar}
                key="health"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgressBar={setProgessBar}
                key="sports"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgressBar={setProgessBar}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgressBar={setProgessBar}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgressBar={setProgessBar}
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgressBar={setProgessBar}
                key="entertainment"
                category="entertainment"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
