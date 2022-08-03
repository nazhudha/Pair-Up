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
        >
          Pair Up!
        </motion.h1>
      </div>

      <h3 className="header2">
        A website to pair program with coders from around the world
      </h3>
      <Link to="/Signupname">
        <button>Sign up</button>
      </Link>
      <Link to="/login">
        <button>Log in</button>
      </Link>
    </div>
  );
}
