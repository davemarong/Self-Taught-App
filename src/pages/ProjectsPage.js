import React from "react";
import CreateSubjectModal from "../components/mainSubjects/modal/CreateSubjectModal";
import SecondarySubjects from "../components/secondarySubjects/SecondarySubjects";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import Projects from "../components/projects/Projects";
import useScrollToTop from "../components/customHooks/useScrollToTop";

const useStyles = makeStyles({
  full: {
    paddingLeft: 270,
    paddingRight: 20,
  },
  mobile: {
    padding: 20,
  },
});
export default function ProjectsPage() {
  // Custom hook
  useScrollToTop();

  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <Projects />
    </div>
  );
}
