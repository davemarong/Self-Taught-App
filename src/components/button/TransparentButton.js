// IMPORTS

// React
import React from "react";

// Material UI
import Button from "@material-ui/core/Button";

// Framer motion
import { motion } from "framer-motion";

export default function TransparentButton({ func, icon, children }) {
  return (
    <Button
      onClick={func}
      style={{ margin: "10px 0" }}
      component={motion.div}
      whileHover={{
        scale: 1.2,
        transition: { duration: 0.3 },
      }}
      variant="outlined"
      endIcon={icon}
    >
      {children}
    </Button>
  );
}
