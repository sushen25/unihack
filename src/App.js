import './App.css';
import Overview from './overview/Overview'
import PotentialInvestments from './areas_of_improvement/potential_gains'
import GoalSetting from "./goal_setting/goal_setting";

import {Route, BrowserRouter as Router} from "react-router-dom"

function App() {
  return (
    <div className="container">
      <Router>
        <Route path="/" component={Overview} exact/>
        <Route path="/improvement" component={PotentialInvestments} exact/>
        <Route path="/goals" component={GoalSetting} exact/>
      </Router>
    </div>
    
  );
}

export default App;
