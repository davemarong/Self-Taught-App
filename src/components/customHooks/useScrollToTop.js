import React, { useEffect } from "react";

// React Router
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);
}
