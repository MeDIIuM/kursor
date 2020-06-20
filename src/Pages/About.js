import React, { Component } from 'react';
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap';
import Web3 from 'web3';


export default class About extends Component{
      
  constructor(props) {
    super(props);
    this.state = {
      account: "not registered",
    };
    
  }
  
  async loadBlockChain() {
    console.log("loadBlockChain")
    if (window.ethereum) {
        const accounts =  await window.ethereum.enable();
        const web3 = new Web3(window.ethereum);
        this.setState({account: accounts[0]})
        this.setState({web3: web3})
    } else {
        console.log("window.ethereum empty")
    }
  }

  componentDidMount() {
    this.loadBlockChain()
  }


    render(){
        return(
            <Container>
                <Tab.Container id="ledt-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column mt-2">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Личные данные</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Курсы</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Как добавить курс</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <h3>{this.state.account}</h3>
                                    <p>Здесь содержится некая информация обо мне</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <h3>Мои курсы</h3>
                                    <ul>
                                        <li><a href="#">Курс 1</a></li>
                                        <li><a href="#">Курс 2</a></li>
                                        <li><a href="/blog">Курс 3</a></li>
                                    </ul>
                                    <h3>Добавленные курсы</h3>
                                    <ul>
                                        <li><a href="#">Курс 1</a></li>
                                        <li><a href="#">Курс 2</a></li>
                                        <li><a href="/blog">Курс 3</a></li>
                                    </ul>                                                                
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                   <h3>Не придумал</h3>
                                    <p></p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </Container>
        )
    }
}