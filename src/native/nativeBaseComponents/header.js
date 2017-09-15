import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';

export default class HeaderComponent extends Component {
    constructor(props){
        super(props);
        console.log('Header navigations==>',this.props.addpatientroute)
    }
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent >
                        <Icon name='menu' />
                    </Button>
                </Left>
                <Body>
                    <Title>Doctor App</Title>
                    <Subtitle>Manage All Patients</Subtitle>
                </Body>
                <Right>
                </Right>
            </Header>

        );
    }
}