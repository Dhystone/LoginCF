import React from "react";
import { Button, View, Text } from "react-native";
import LogoTitle from '../../components/common/logos';

export default class LoginScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return{
        //title: 'Login',
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button
              onPress={() => navigation.navigate('Register')}
              title="Register"
              color="#ccc"
            />
        )      
        }  
    };    
    render() {
    const { navigation } = this.props;
    const paramFrom = navigation.getParam('paramFrom', 'No-Place');
    const otherParam = navigation.getParam('otherParam', 0);      
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Login Screen</Text>
        <Text>paramFrom: {JSON.stringify(paramFrom)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>        
        <Button
        title="Register"
        onPress={() => this.props.navigation.navigate('Register')}
        />           
      </View>  
    );
  }
}
