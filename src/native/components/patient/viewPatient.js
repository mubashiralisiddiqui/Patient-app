import React, { Component } from 'react';
import { Container, Content, List, ListItem, Thumbnail, Text, Body, View } from 'native-base';
import { AsyncStorage, FlatList, ScrollView, TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker'
import * as firebase from 'firebase'
var allPatients = [];

export default class ViewPatient extends Component {
    constructor() {
        super();
        this.state = {
            filterPatient: [],
            data: [],
            filterText: '',
            filter: false,
            date: ''
        }
        console.log("propssss", this.props)
    }
    static navigationOptions = {
        title: 'View PAtient Details',
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
    componentDidMount() {
        this.viewPatient();
    }
    viewPatient() {
        allPatients = [];
        let Mydata;
        firebase.database().ref('Patient').on('child_added', snap => {
            allPatients = this.state.data
            allPatients.push(snap.val())
            this.setState({
                data: allPatients
            })
        })

    }
    searchByDate(date) {
        this.setState({
            date: date
        })
        var filterdata = this.state.data;
        this.setState({ date: date })
        var filterdata = filterdata.filter(asset => asset.date.indexOf(date) !== -1);
        this.setState({
            filter: true,
            filterPatient: filterdata
        })
    }
    searchByName(text) {
        var filterdata = this.state.data;
        this.setState({ filterText: text })
        var filterdata = filterdata.filter((data) => data.patientName.toLowerCase().indexOf(text) !== -1);
        this.setState({
            filter: true,
            filterPatient: filterdata
        })
    }
    render() {
        return (
            <List>
                <ListItem>
                    <Body>
                        <TextInput multiline={true}
                            style={{ height: 40, borderColor: '#eee', borderWidth: 0, }}
                            onChangeText={(text) => this.searchByName(text.toLowerCase())}
                            placeholder="Search"
                            underlineColorAndroid='blue'
                        />
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.state.date}
                            mode="date"
                            placeholder="select date"
                            format="D/M/YYYY"
                            minDate="1/1/2015"
                            maxDate="1/1/2018"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(date) => this.searchByDate(date)}
                        />
                        <Text style={{ textAlign: 'center', color: 'blue', fontSize: 25, fontWeight: 'bold' }}>Patients</Text>
                        {this.state.filter ?
                            <FlatList
                                data={this.state.filterPatient}
                                renderItem={({ item, index }) =>
                                    <ScrollView key={index} style={{ borderWidth: 1, borderColor: 'gray', marginTop: 10 }}>
                                        <Text style={{ marginTop: 10 }}>Date: {item.date}</Text>
                                        <Text >Name:  {item.patientName} </Text>
                                        <Text>Gender: {item.gender}</Text>
                                        <Text>Age: {item.patientAge}</Text>
                                        <Text>Desease: {item.disease}</Text>
                                        <Text>Description: {item.description}</Text>
                                    </ScrollView>
                                }
                            /> :
                            <FlatList
                                data={this.state.data}
                                renderItem={({ item, index }) =>
                                    <ScrollView key={index} style={{ borderWidth: 1, borderColor: 'gray', marginTop: 10 }}>
                                        <Text style={{ marginTop: 10 }}>Date: {item.date}</Text>
                                        <Text >Name:  {item.patientName} </Text>
                                        <Text>Gender: {item.gender}</Text>
                                        <Text>Age: {item.patientAge}</Text>
                                        <Text>Desease: {item.disease}</Text>
                                        <Text>Description: {item.description}</Text>
                                    </ScrollView>
                                }
                            />}

                    </Body>
                </ListItem>
            </List>
        )
    }
}
