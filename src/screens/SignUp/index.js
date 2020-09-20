import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';
import SignupForm from './SignupForm';

export default class Signup extends Component {

  render() {
    return (
       <React.Fragment>
            <Header>
                <Body>
                <Title>Sign Up</Title>
                </Body>
            </Header>
            <SignupForm />
       </React.Fragment>
    );
  }
}