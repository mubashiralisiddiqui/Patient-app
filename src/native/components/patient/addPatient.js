import React, { Component } from 'react';
import {
    Container, Content, Form, Item, Input, Label, H2,
    Textarea, Radio, Right, Left, Text, ListItem, Button, Picker,
    Icon, Toast
} from 'native-base';
import { StyleSheet, AsyncStorage, View, TouchableOpacity } from 'react-native';
import styles from './styles';
var allPatients = [];

export default class AddPatient extends Component {
    constructor() {
        super();
        this.state = {
            patientName: '',
            patientAge: '',
            gender: 'male',
            diseases: 'e.g headage',
            history: 'history '
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
            backgroundColor: 'darkblue'
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
        allPatients.push(patientData)
        AsyncStorage.setItem("patientData", JSON.stringify(allPatients)).then(() => {
            console.log("succes to Saved");
            alert('patient added successfully')
            // .then(()=> navigate('App'))
           
        })
    }
    render() {
        // const { navigate } = this.props.navigation
        return (
            <Container style={styles.container} >
                <Content style={styles.Content}>
                    <H2 style={styles.addPatient} >Add Patient</H2>
                    <Form  >
                        <Item >
                            <Input
                                placeholder="Name"
                                maxLength={50}
                                returnKeyType='next'
                                onChangeText={(name) => this.setState({ patientName: name })}
                            />
                        </Item>
                        <Item>
                            <Input keyboardType='numeric' type='number' maxLength={2}
                                onChangeText={(age) => this.setState({ patientAge: age })}
                                placeholder="Age"
                            />
                        </Item>
                        <View>
                            <Picker selectedValue={this.state.gender} onValueChange={(item) => this.selectGender(item)}>
                                <Picker.Item label="Male" value="male" />
                                <Picker.Item label="Female" value="female" />
                            </Picker>
                        </View>
                        <Item>
                            <Input
                                type='text'
                                placeholder="Disease"
                                onChangeText={(disease) => this.setState({ diseases: disease })}
                            />
                        </Item>
                        <View style={styles.textAreaAddPatient}>
                            <Textarea
                                onChangeText={(history) => this.setState({ history: history })}
                                multiline={true}
                                placeholder="Brief History"
                            />
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity full success onPress={() => this.addPatient()} style={styles.button} >
                                <Text style={{ textAlign: 'center', justifyContent: 'space-around' }}> Submit</Text>
                            </TouchableOpacity>
                        </View>
                    </Form>
                </Content>
            </Container>
        );
    }
}

