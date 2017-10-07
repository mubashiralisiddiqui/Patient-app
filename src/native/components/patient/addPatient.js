import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H2,
    Textarea, Radio, Right, Left, Text, ListItem, Picker,
    Icon, Toast
} from 'native-base';
import { FormLabel, FormInput, FormValidationMessage, Button, Header } from 'react-native-elements'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { StyleSheet, AsyncStorage, View, TouchableOpacity, TextInput } from 'react-native';
import * as firebase from 'firebase';

import styles from './styles';
var allPatients = [];

export default class AddPatient extends Component {
    constructor() {
        super();
        this.state = {
            patientName: '',
            patientAge: '',
            gender: 'male',
            diseases: '',
            history: ''
        }
    }

    static navigationOptions = {
        title: 'Add PAtient Details',
        headerTitleStyle: {
            color: 'white',
            fontFamily: 'Courier New',
            fontWeight: 'bold',
            fontSize: 20,
            justifyContent: 'space-between',
            textAlign: 'center',
            paddingLeft: 60
        },
        headerStyle: {
            backgroundColor: '#512DA8'
        }
    };
    selectGender(gender) {
        this.setState({ gender: gender })
    }
    addPatient() {
        let date = new Date();
        console.log(date)
        let today = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        var patientData = {
            patientName: this.state.patientName,
            patientAge: this.state.patientAge,
            gender: this.state.gender,
            disease: this.state.diseases,
            date: fullDate
        }
        firebase.database().ref('/Patient').push(patientData)
            .then(() => {
                this.input.clearText();
                alert('Patent Dtails have been addes succesfully')
            })
    }
    render() {
       
        return (
            <View style={styles.container}>
                <KeyboardAwareScrollView >
                    <FormLabel>
                        Name
                    </FormLabel>
                    <FormInput
                        onChangeText={(name) => this.setState({ patientName: name })}
                        ref={input => this.input = input}
                    />
                    <FormLabel>
                        Age
                    </FormLabel>
                    <FormInput
                        ref={input => this.input = input}
                        onChangeText={(age) => this.setState({ patientAge: age })}
                    />
                    <Picker selectedValue={this.state.gender} onValueChange={(item) => this.selectGender(item)}>
                        <Picker.Item label="Male" value="male" />
                        <Picker.Item label="Female" value="female" />
                    </Picker>
                    <FormLabel>
                        Disease
                    </FormLabel>
                    <FormInput
                        ref={disease => this.input = disease}
                        onChangeText={(disease) => this.setState({ diseases: disease })}
                    />
                    <FormLabel>
                        History
                    </FormLabel>
                    <FormInput
                        ref={input => this.input = input}
                        onChangeText={(history) => this.setState({ history: history })}
                    />
                    <Button
                        title="submit"
                        onPress={() => this.addPatient()}
                        buttonStyle={{ backgroundColor: '#512DA8' }}
                    />

                </KeyboardAwareScrollView>
            </View>
        );
    }
}

