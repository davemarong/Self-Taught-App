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
import ProjectsPage from "./pages/ProjectsPage";
import Subjects from "./pages/Subjects";
import { Templates } from "./pages/Templates";
import { Stats } from "./pages/Stats";
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
import Introduction from "./components/introduction/Introduction";

function App() {
  const dispatch = useDispatch();

  const [projects, setProjects] = useState();

  useEffect(() => {
    dispatch(change_main_subjects(main_subjects));
    dispatch(change_secondary_subjects(secondary_subjects));
  }, []);
  return (
    <div
      style={{
        background: "linear-gradient(45deg, #3C54D6 30%, #D586F7 90%)",
        background:
          "linear-gradient(45deg, rgb(73 101 255 / 75%) 30%, rgb(197 62 255 / 72%) 90%)",
        paddingBottom: 100,
        minHeight: "100vh",
      }}
    >
      <SnackbarProvider maxSnack={4}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/stats" component={Stats} />
            <Route path="/subjects" component={Subjects} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/templates" component={Templates} />
            <Route path="/account" component={Introduction} />
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
