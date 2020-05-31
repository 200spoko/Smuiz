import React, { Component } from 'react';
import "../style/App.sass"
import { BrowserRouter as Router } from "react-router-dom"
import Header from "../components/Header"
import Navigation from "../components/Navigation"

class App extends Component {

  state = {
    navMenu: false,
  }

  handleNavMenu = () => {
    console.log('działa');
    this.setState({
      navMenu: !this.state.navMenu
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header
            isActive={this.state.navMenu}
            handleMenuBtn={this.handleNavMenu} />

          <Navigation isActive={this.state.navMenu} />

          <main className="Main-section">
            main
        </main>
          <footer className="Footer">
            footer
</footer>
        </div>
      </Router >
    );
  }
}

export default App;

