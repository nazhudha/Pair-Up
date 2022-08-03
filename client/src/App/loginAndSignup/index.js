import React from 'react'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'

export default function LoginAndSignup() {
  return (
    <div>
      <motion.h1 animate={{ fontSize: 500, color: '#ff2994', x: 100, y:200 }}>
        Hello there!
      </motion.h1>
       <Link to="/Signupname">
        <button>
          Sign up
        </button>
      </Link>
      <Link to="/login">
        <button>
          Log in
        </button>
      </Link>
    </div>
  )
}
