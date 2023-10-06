import React, { useEffect } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Signin from "./Signin";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useStateValue } from "./StateProvider";
import Payments from "./Payments";
import ScrollToTop from "./ScrollToTop";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      console.log("the user >>>", user);
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch({ type: "SET_USER", user: user });
        // ...
      } else {
        // User is signed out
        dispatch({ type: "SET_USER", user: null });
        // ...
      }
    });
  }, []);
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/signin"
            element={
              <>
                <Signin />
              </>
            }
          />
          <Route
            path="/payment"
            element={
              <>
                <Header />
                <Payments />
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </div>
      <ScrollToTop />
    </Router>
  );
}

export default App;
