import React, { useEffect, useRef, useState } from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import MainSubjectModal from "./components/mainSubjects/modal/MainSubjectModal";
import Nav from "./components/nav/Nav";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import { SnackbarProvider } from "notistack";

import { useDispatch, useSelector } from "react-redux";
import {
  main_subjects,
  secondary_subjects,
} from "./components/roadmapTemplate/RoadmapTemplate";
import {
  get_top_level_index,
  change_subject_type,
  change_main_subjects,
  change_secondary_subjects,
} from "./redux/actions/index";

import "./styles/App.css";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change_main_subjects(main_subjects));
    dispatch(change_secondary_subjects(secondary_subjects));
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #3C54D6 30%, #D586F7 90%)",
        paddingBottom: 100,
      }}
    >
      <SnackbarProvider maxSnack={4}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/account" component={Account} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/">
              <Redirect to="/home" />
            </Route>
          </Switch>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
