import React, { Component } from 'react';
import { Media, Container, Col, Row } from "react-bootstrap";

export default class Blog extends Component{
    render(){
        return(
          <Container>
              <Row>
                  <Col md="9">
                      <Media>
                          <img
                            width={150}
                            height={150}
                            className="mr-3"
                            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F99%2FUnofficial_JavaScript_logo_2.svg%2F1200px-Unofficial_JavaScript_logo_2.svg.png&imgrefurl=https%3A%2F%2Fru.wikipedia.org%2Fwiki%2FJavaScript&tbnid=imsyna4i1ZfCQM&vet=12ahUKEwjLkvbg-o3qAhUOsyoKHa9XAAgQMygAegQIARB_..i&docid=CkXirMXvIZwNmM&w=1200&h=1200&q=js&client=ubuntu&ved=2ahUKEwjLkvbg-o3qAhUOsyoKHa9XAAgQMygAegQIARB_"
                          />
                          <Media.Body>
                              <h5>Какой-то курс</h5>
                              <p>Информация о каком-то курсе</p>
                          </Media.Body>
                      </Media>
                  </Col>
              </Row>
          </Container>
        )
    }
}
