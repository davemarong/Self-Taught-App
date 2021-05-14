import React from "react";
import MainSubjects from "../components/mainSubjects/MainSubjects";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
  },
  mobile: {
    padding: 20,
  },
});

export default function Home() {
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      Home
      <MainSubjects />
    </div>
  );
}
