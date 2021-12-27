// IMPORTS

// React
import React from "react";
// Material UI

import Button from "@material-ui/core/Button";
// Framer motion
import { motion } from "framer-motion";

export default function RedButton({ text, icon, func }) {
  return (
    <Button
      style={{ backgroundColor: "#ff2929", color: "white" }}
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
