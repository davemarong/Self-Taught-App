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

import "./styles/App.css";
function App() {
  return (
    <div>
      <SnackbarProvider maxSnack={4}>
        <Router>
          <Nav />
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route path="/account" component={MainSubjectModal} />
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
