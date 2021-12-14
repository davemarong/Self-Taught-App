// IMPORTS

// React
import React from "react";
// Material UI

import Button from "@material-ui/core/Button";
// Framer motion
import { motion } from "framer-motion";

export default function GreenButton({ text, icon, func }) {
  return (
    <Button
      style={{
        background: "linear-gradient(10deg, #50FFA1, #BAFF5D)",
      }}
      onClick={func}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      variant="outlined"
      endIcon={icon}
    >
      {text}
    </Button>
  );
}
