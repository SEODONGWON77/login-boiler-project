import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import Header from "./views/common/Header.js";
import Footer from "./views/common/Footer.js";
import Landing from "./views/landingPage/LandingWeb.js";
import Login from "./views/userPage/loginPage/LoginPage.js";
import Register from "./views/userPage/registerPage/RegistePager.js";
import KeepPage from "./views/keepPage/KeepPage.js";
import SearchResultPage from "./views/searchResultPage/SearchResultPage";
import MapContainer from "./views/kakaoMap/MapContainer";
import ChangeLocation from "./views/changeLocation/ChangeLocation";
import { MapContextProvider } from "../contexts/map_context";
import { ApplicationContextProvider } from "../contexts/weatherAndMap_context";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "../App.css";
function App() {
  return (
    <div>
      <Header />

      <ApplicationContextProvider>
        <MapContextProvider>
          <Route
            render={({ location }) => {
              console.log("로케이션", location);
              return (
                <TransitionGroup className="transition-group">
                  <CSSTransition
                    key={location.key}
                    timeout={{ enter: 300, exit: 300 }}
                    classNames="fade"
                  >
                    <section className="route-section">
                      <Switch location={location}>
                        <Route exact path="/" component={Auth(Landing, null)} />
                        <Route
                          exact
                          path="/login"
                          component={Auth(Login, false)}
                        />
                        <Route
                          exact
                          path="/register"
                          component={Auth(Register, false)}
                        />
                        <Route exact path="/map" component={MapContainer} />
                        <Route
                          exact
                          path="/changelocation"
                          component={Auth(ChangeLocation, false)}
                        />
                        <Route
                          exact
                          path="/keep"
                          component={Auth(KeepPage, true)}
                        />
                        <Route
                          exact
                          path="/searchResult"
                          component={Auth(SearchResultPage, null)}
                        />
                      </Switch>
                    </section>
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          ></Route>
        </MapContextProvider>
      </ApplicationContextProvider>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
