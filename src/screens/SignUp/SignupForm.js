import React, { Component } from 'react';
import firebase from 'firebase';

import { Container, Header, Content, Input, Item, Body, Title, Button, Text, Spinner } from 'native-base';
import {Formik, ErrorMessage} from 'formik';
//import api from '../../api/api';
import validations from './validations';
import { Alert } from 'react-native';


export default class SignupForm extends Component {
    _handleSubmit = async ({email, password}, bag) => {
        try {
          //await api(values);
          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
            var actionCodeSettings = {
              // URL you want to redirect back to. The domain (www.example.com) for this
              // URL must be whitelisted in the Firebase Console.
              url: 'https://nearby-3b18e.firebaseapp.com/__/auth/action?mode=%3Caction%3E&oobCode=%3Ccode%3E' + firebase.auth().currentUser.email,
              // This must be true.
              handleCodeInApp: true,
              iOS: {
              bundleId: 'com.nearby.ios'
              },
              android: {
              packageName: 'com.nearby.android',
              installApp: true,
              minimumVersion: '12'
              },
              dynamicLinkDomain: 'nearbyproje.page.link'
              };
            firebase.auth().currentUser.sendEmailVerification(actionCodeSettings)
            .then(()=>{
              console.log('email send')
              //Alert.alert('Check email')
            })
            .catch(this.signupfail.bind(this))
          }),function(error){
              console.log('email not sent' + error)
          }
        
    
        }catch(error){
          console.log(error.toString())
        }
        bag.setSubmitting(false);
    };

    signupfail(){
      console.log('Hata');
    }
    
    /*signUp() {
        Alert.alert(
            'Mesaj',
            'Hoşgeldiniz',
            [
              {text:'Tamam', onPress: () => null}
            ]
        )
    }
    */
  render() {
    return (
        <Formik
            initialValues={{ email: '', password:'', passwordConfirm: ''}}
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
                    returnKeyType={'next'}
                    onSubmitEditing={() => this.passwordConfirmRef._root.focus()}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    placeholder='password'
                    onBlur={() => setFieldTouched('password')}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />
                { (errors.password && touched.password) && <Text style={{ color:'red' }}>{errors.password}</Text>}
                </Item>

                <Item error={errors.passwordConfirm && touched.passwordConfirm}>
                <Input
                    ref={ref => this.passwordConfirmRef = ref}
                    returnKeyType={'go'}
                    onChangeText={handleChange('passwordConfirm')}
                    value={values.passwordConfirm}
                    placeholder='password confirmation'
                    onBlur={() => setFieldTouched('passwordConfirm')}
                    autoCapitalize={'none'}
                    secureTextEntry={true}
                />
                { (errors.passwordConfirm && touched.passwordConfirm) && <Text style={{ color:'red' }}>{errors.passwordConfirm}</Text>}
                </Item>
                <Button 
                block
                disabled={!isValid || isSubmitting}
                onPress={handleSubmit}
                style={{marginTop:10}}>
                { isSubmitting && <Spinner size={'small'} color={'white'}/>}
                <Text>Join</Text>
                </Button>
            </Content>
            )}
        </Formik>
    );
  }
}
