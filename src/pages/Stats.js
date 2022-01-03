import React, { useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
// Components
import StatsContainer from "../components/stats/StatsContainer.tsx";
import StatsComponent from "../components/stats/Stats.tsx";
import Topics from "../components/stats/Topics.tsx";
// Redux
import { useSelector } from "react-redux";

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
  // UseState
  const [stats, setStats] = useState({});

  // Redux
  const mainSubjects = useSelector((state) => state.mainSubjects);
  const secondarySubjects = useSelector((state) => state.secondarySubjects);
  const projects = useSelector((state) => state.projects);

  // Styles
  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <StatsContainer></StatsContainer>
      <StatsComponent></StatsComponent>
      {/* <Topics projects={projects}></Topics> */}
    </div>
  );
}
