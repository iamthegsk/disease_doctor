import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import calculateBMI from "./BMI";// Import your BMI page component here
import handleDrugFormSubmit from "./DrugInfo"; // Import your DrugInfo page component here
import FeedbackPage from "./feedback"; // Import your Feedback page component here
import RegistrationPage from "./UserLogin";



function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegistrationPage} />
        <Route path="/bmi" component={calculateBMI} />
        <Route path="/druginfo" component={handleDrugFormSubmit} />
        <Route path="/feedback" component={FeedbackPage} />
        <Route exact path="/home" component={App} />
      </Switch>
    </Router>
  );
}

export default Routes;
