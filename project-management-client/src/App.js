import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import ProjectList from "./components/projects/ProjectList";
import Navbar from "./components/navbar/Navbar";
import ProjectDetails from "./components/projects/ProjectDetails";
import TaskDetails from "./components/tasks/TaskDetails";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/projects" component={ProjectList} />
          <Route exact path="/projects/:id" component={ProjectDetails} />
          {/* added to display task details page: */}
          <Route
            exact
            path="/projects/:id/tasks/:taskId"
            component={TaskDetails}
          />
          {/* <== !!! */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
