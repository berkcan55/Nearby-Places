import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';
import SigninForm from './SigninForm';

export default class SignIn extends Component {

  render() {
    return (
       <React.Fragment>
            <Header>
                <Body>
                <Title>Sign In</Title>
                </Body>
            </Header>
            <SigninForm />
       </React.Fragment>
    );
  }
}