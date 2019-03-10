import  WelcomeScreen  from './auth/screens/WelcomeScreen';
import  RegisterScreen  from './auth/screens/RegisterScreen';
import  LoginScreen  from './auth/screens/LoginScreen';
import { createSwitchNavigator,createStackNavigator, createAppContainer } from "react-navigation";


const AppNavigator = createSwitchNavigator({
        Welcome: WelcomeScreen,
        Register: RegisterScreen,
        Login: LoginScreen
      },
      {
        initialRouteName: 'Welcome',
      }
    );

export default createAppContainer(AppNavigator);