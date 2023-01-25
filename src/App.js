import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import News from "./components/News";

export default function App() {
  const pageSize = 15;
  const apiKey = "qwqwqw";
  // if we use any REACT__APP in any local env than we get access of that env in our react app
  // apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  // console.log(category.general.name)
  return (
    <>
      <Router>
        <Navbar />
        {/* <News setProgress={setProgress}  pageSize={pageSize} country={"in"} category={"sports"} /> */}

        {/* loading bar npm*/}
        <LoadingBar
          height={3}
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />

        <Routes>
          {/* here the problem is we are mounting the same component and the component is not remounting. 
            but we want to re mount the component with updated props,
            to solve this problem we will provide keys to the component
            */}
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="home"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country={"in"}
                category={"business"}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="entertainment"
                pageSize={pageSize}
                country={"in"}
                category={"entertainment"}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country={"in"}
                category={"general"}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country={"in"}
                category={"health"}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country={"in"}
                category={"science"}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country={"in"}
                category={"sports"}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country={"in"}
                category={"technology"}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}
