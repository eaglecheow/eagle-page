import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import PropTypes from 'prop-types';

import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';

const PageCollection = [
  {name: "home", displayName: "Home Page", target: () => <HomePage/>, isActive: true},
  {name: "profile", displayName: "Profile", target: () => <ProfilePage/>},
  {name: "projects", displayName: "Projects", target: () => <ProjectsPage/>},
  {name: "about", displayName: "About", target: () => <AboutPage/>},
];


const AppContainer = (props) => {
  let ActivePage = props.activePage;
  return (
    <div>
      {
        <ActivePage/>
      }
    </div>
  )
}

const NavBar = (props) => {
  return (
    <div>
      <nav className="navbar navbar-expand bg-dark navbar-dark">
        <ul className="navbar-nav">
          {
            props.links.map(link => {
              let classNames = ["nav-item"];
              if (link.isActive === true) {
                classNames.push("active");
              }
              return(
                <li className={classNames}>
                  <a className="nav-link" onClick={() => props.onLinkClicked(link.name)}>{link.displayName}</a>
                </li>
              );
            })
          }
        </ul>
      </nav>
    </div>
  )
}

class App extends Component {

  state = {
    activePage: () => <HomePage/>,
  }

  render() {
    return (
      <div>
        <NavBar links={PageCollection} onLinkClicked={this.linkClicked}/>
        <AppContainer activePage={this.state.activePage}/>
      </div>
    );
  }

  linkClicked = (name) => {
    PageCollection.forEach(link => {
      if (link.name === name) {
        let newState = Object.assign({}, this.state, {activePage: link.target});
        this.setState(newState);
      }
    });
  }
}

export default App;
