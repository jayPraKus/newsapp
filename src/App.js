import "./App.css";
import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  key="general"
                  pagesize={6}
                  country="us"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News
                  key="business"
                  pagesize={6}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  pagesize={6}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News
                  key="health"
                  pagesize={6}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News
                  key="science"
                  pagesize={6}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News
                  key="sports"
                  pagesize={6}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News
                  key="technology"
                  pagesize={6}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
