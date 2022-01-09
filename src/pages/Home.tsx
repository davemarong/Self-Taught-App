import React from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { makeStyles } from "@material-ui/core/styles";
import { CreateNewProject } from "../components/home/CreateNewProject";
import { UpdateYourProject } from "../components/home/UpdateYourProject";
import { HomeContainer } from "../components/home/HomeContainer";
import { UpdateYourSubject } from "../components/home/UpdateYourSubject";
import { Header } from "../components/home/Header";
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

export default function Home() {
  // Custom hook
  useScrollToTop();

  const matches = useMediaQuery("(min-width:1224px)");
  const classes = useStyles();
  return (
    <div className={matches ? classes.full : classes.mobile}>
      <HomeContainer>
        <Header />
        <CreateNewProject />
        <UpdateYourSubject />
        <UpdateYourProject />
      </HomeContainer>
    </div>
  );
}
