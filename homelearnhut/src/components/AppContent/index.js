import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../App/App.css";
import HomeworkViewer from "../HomeworkViewer";
import MyClassroom from "../MyClassroom";
import NewsFeed from "../NewsFeed";
import AuthButton from "../AuthButton";
import React, { useReducer } from "react";
import TopBar from "../TopBar";

import { reducer } from "../../libs/reducer"
import { initialState } from "../../libs/initialState"


function AppContent() {
  const [state, dispatch] = useReducer(reducer, initialState);



  return (
    <div className="App">


      <h1 data-testid="heading">HomeLearn Hut</h1>
      <p>LOGO</p>
      <Router>
        <div>
          <AuthButton />
          <nav>
            <ul>
              <li>
                <Link to="/feed">HomeWork Feed</Link>
              </li>
              <li>
                <Link to="/myClass">MyClassroom</Link>
              </li>
              <li>
                <Link to="/pupilPage">Pupil Page</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}


          <Switch>
            <Route path="/myClass">
              <TopBar />
              <MyClassroom children={state[0].children} />
            </Route>
            <Route path="/pupilPage">
              <TopBar />
              {/* <TopBar uploadClick={() => console.log("click")} /> */}
              <HomeworkViewer />
            </Route>
            <Route path="/">
              <TopBar />
              <NewsFeed homeworkList={state} />
            </Route>
          </Switch>
        </div>
      </Router>

    </div >
  );
}

export default AppContent;
