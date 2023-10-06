import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { app } from "./firebase";
import "./Signin.css";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

function Signin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  const register = (e) => {
    //e.preventDeault();

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/603px-Amazon_logo.svg.png?20220213013322"
          alt=""
        />
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="login__signinButton"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </form>

        <p>By signing in you agree to our policies</p>

        <button className="login__registerButton" onClick={register}>
          Create Your Account
        </button>
      </div>
    </div>
  );
}

export default Signin;
