import React, { Component } from "react";
import { Navbar, Nav, FormControl, Container, Form, Button} from 'react-bootstrap';
import logo from './1.png';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from '../Pages/Home';
import Contacts from '../Pages/Contacts';
import About from '../Pages/About';
import Blog from '../Pages/Blog';

export default class Header extends Component{
    render(){
        return(
            <div>
                <Navbar  collapseOnSelect expand="md" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Главная</Nav.Link>
                                <Nav.Link href="/about">Моя страница</Nav.Link>
                                <Nav.Link href="/blog">Курс Ethereum</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                        <Form inline>
                           
                        </Form>
                    </Container>
                </Navbar>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about" component={About} />
                        <Route exact path="/contacts" component={Contacts} />
                        <Route exact path="/blog" component={Blog} />
                    </Switch>
                </Router>
            </div>
        )
    }
}