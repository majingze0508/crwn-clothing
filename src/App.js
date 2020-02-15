import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.component";

/*const HomePage = props => {
  console.log(props);
  return (
    <div>
      <button onClick={() => props.history.push("/topics")}>Topics </button>
      <h1>HOME PAGE</h1>
    </div>
  );
}; */

const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);

/*const TopicsList = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC LIST PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link>
      <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link>
      <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>TOPIC DETAIL PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};*/

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
