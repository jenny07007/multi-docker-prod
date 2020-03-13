import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OtherPage from "./OtherPage";
import Fib from "./Fib";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Home</Link>
          <Link to="/otherpage">Other Page</Link>
        </div>
        <Route exact path="/" component={Fib} />
        <Route path="/otherpage" component={OtherPage} />
      </div>
    </Router>
  );
}

export default App;
