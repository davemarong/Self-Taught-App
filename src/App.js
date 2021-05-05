import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Account from "./pages/Account";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import "./styles/App.css";
function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/account" component={Account} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
