import React from "react";
import { Button, View, Text } from "react-native";

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
        title: 'Register',
      };    

    render() {
    const { navigation } = this.props;
    const paramFrom = navigation.getParam('paramFrom', 'No-Place');
    const otherParam = navigation.getParam('otherParam', 0);
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Register Screen</Text>
        <Text>paramFrom: {JSON.stringify(paramFrom)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
