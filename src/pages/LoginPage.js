import React from "react";
import Login from "../components/login/Login";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import useScrollToTop from "../components/customHooks/useScrollToTop";

// Google analytics
import ReactGA from "react-ga";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});
export default function LoginPage() {
  // Google analytics
  ReactGA.pageview(window.location.pathname);

  // Custom hook
  useScrollToTop();

  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <Login />
    </div>
  );
}
