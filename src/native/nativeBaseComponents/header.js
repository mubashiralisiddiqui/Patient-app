import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Left, Body, Right, Button, Icon, Title, Subtitle } from 'native-base';
import { Header ,Icon} from 'react-native-elements'
export default class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        console.log('Header navigations==>', this.props.addpatientroute)
    }
    render() {
        return (
            <Header
                outerContainerStyles={{ backgroundColor: '#512DA8' }}
                leftComponent={<Icon name="menu" color="#fff" onPress={() => navigate('DrawerOpen')} />}
                centerComponent={{ text: 'Patient Management', style: { color: '#fff' } }}
                rightComponent={<Icon name="home" color="#fff" onPress={() => navigate('Event_LIST')} />}
            />

        );
    }
}