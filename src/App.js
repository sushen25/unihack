import "./App.css";
import Overview from "./overview/Overview";
import PotentialInvestments from "./areas_of_improvement/potential_gains";
import GoalSetting from "./goal_setting/goal_setting";
import MonthlyOverview from "./overview/MonthlyOverview";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
<<<<<<< HEAD
        <Route path="/" component={Overview} exact />
        <Route path="/improvement" component={PotentialInvestments} exact />
        <Route path="/goals" component={GoalSetting} exact />
        <Route path="/monthlyoverview" component={MonthlyOverview} exact />
=======
        <Route path="/overview" component={Overview} exact/>
        <Route path="/improvement" component={PotentialInvestments} exact/>
        <Route path="/goals" component={GoalSetting} exact/>
>>>>>>> 366f5bbe0e07d7a23f17b6472f28eefdd6449360
      </Router>
    </div>
  );
}

export default App;
