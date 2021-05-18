import React from "react";
import Register from "../components/register/Register";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});

export default function RegisterPage() {
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <p>Register</p>
      <Register />
    </div>
  );
}
