import React, { Component, useReducer } from 'react';
import firebase from 'firebase';

import { Container, Header, Content, Input, Item, Body, Title, Button, Text, Spinner } from 'native-base';
import {Formik, ErrorMessage} from 'formik';
//import api from '../../api/api';
import validations from './validations';
import { Alert } from 'react-native';
import App from '../../../App';


export default class SignupForm extends Component {
    _handleSubmit = async ({email, password}, bag) => {
        try {
          //await api(values);
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.loginSuccess.bind(this))
          .catch(this.loginFail.bind(this))
          bag.setSubmitting(false)
          
        }catch (e) {
          bag.setErrors(alert(e))
          //alert(e)
        }
    };
    loginSuccess() {
      Alert.alert(
        'Message',
        'Please restart the app!',
        [
          {text:'Tamam', onPress: () => null}
        ]
      )
      //App();
    }
    loginFail() {
      Alert.alert(
        'Message',
        'Your email or password is incorrect!',
        [
          {text:'Tamam', onPress: () => null}
        ]
      )
    }
  render() {
    return (
        <Formik
            initialValues={{ email: '', password:''}}
            onSubmit={this._handleSubmit}
            validationSchema={validations}
        >
            {({ values, handleChange, handleSubmit, errors, touched,  setFieldTouched, isValid, isSubmitting}) => (
            <Content style={{padding: 10}}>
                <Item error={errors.email && touched.email}>
                <Input
                    returnKeyType={'next'}
                    onSubmitEditing={() => this.passwordRef._root.focus()}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    placeholder='e-mail'
                    onBlur={() => setFieldTouched('email')}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                />
                { (errors.email && touched.email) && <Text style={{ color:'red' }}>{errors.email}</Text>}
                </Item>

                <Item error={errors.password && touched.password}>
                <Input
                    ref={ref => this.passwordRef = ref}
                    returnKeyType={'go'}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    placeholder='password'
                    onBlur={() => setFieldTouched('password')}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />
                { (errors.password && touched.password) && <Text style={{ color:'red' }}>{errors.password}</Text>}
                </Item>
                <Button 
                block
                disabled={!isValid || isSubmitting}
                onPress={handleSubmit}
                style={{marginTop:10,}}>
                { isSubmitting && <Spinner size={'small'} color={'white'}/>}
                <Text>Login</Text>
                </Button>
            </Content>
            )}
        </Formik>
    );
  }
}
