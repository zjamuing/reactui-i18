import React, { Component } from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';
import {
  Input, Radio, Select, NavBar
} from './components/FormPageComponent';

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar/>
        <Container fluid>
          <Button color="link"><Link to="/groups">Manage Program Events</Link></Button>
        </Container>
        <section>
        <Container fluid>
          <Button color="link"><Link to="/dynamicforms">Provide Applicant Info</Link></Button>
        </Container>
        </section>
      </div>
    );
  }
}

export default Home;