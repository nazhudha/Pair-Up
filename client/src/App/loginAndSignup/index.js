import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function LoginAndSignup() {
  return (
    <div>
      <div className="header">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, scale: 1.8 }}
          transition={{ delay: 0.1, duration: 2.5 }}
        >
          Pair Up!
        </motion.h1>
      </div>

      <h2 className="header2">
        A website to pair program with coders from around the world
      </h2>
      <Link to="/Signupname">
        <button className="signup-btn">Sign up</button>
      </Link>
      <Link to="/login">
        <button className="login-btn">Log in</button>
      </Link>
    </div>
  );
}
