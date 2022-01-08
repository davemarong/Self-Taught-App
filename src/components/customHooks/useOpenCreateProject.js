import React, { useEffect } from "react";

// React Router
import { useHistory, useLocation } from "react-router-dom";

export default function useOpenCreateProject({ setBackdrop, func }) {
  // React router
  let location = useLocation();
  useEffect(() => {
    if (location.search === "?createProject") {
      setBackdrop(true);
      setTimeout(func, 500);
      console.log("hei");
    }
  }, []);
  return <div></div>;
}
