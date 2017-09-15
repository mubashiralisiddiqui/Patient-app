import React from 'react';
import { Container, StyleProvider } from 'native-base';
import Footer from '../../nativeBaseComponents/footer';
import Header from '../../nativeBaseComponents/header';
import { Text, View } from 'react-native';
export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const style = {
            body: {
                flex: 1
            },
            container: {
                display: 'flex',
                flexDirection: 'column'
            }
        }
        const { navigate } = this.props.navigation
        return (
            <Container style={style.container}>
                <Header />
                <View style={style.body}>
                    <Text style={{ fontSize: 30, color: 'blue', textAlign: 'center', marginTop: 100 }}>Welcom To Patient Management system</Text>
                </View>
                <Footer
                    addpatientroute={() => { navigate('AddPatientScreen') }}
                    viePateintroute={() => navigate('ViewPatientScreen')}
                />
            </Container>
        );
    }
}