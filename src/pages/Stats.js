import React from "react";
import MainSubjects from "../components/mainSubjects/MainSubjects";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import StatsContainer from "../components/stats/StatsContainer.tsx";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});

export default function Stats() {
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <StatsContainer></StatsContainer>
    </div>
  );
}
