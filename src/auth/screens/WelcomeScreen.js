import React from "react";
import { Button, View, Text, Image } from 'react-native';
import Swiper from 'react-native-swiper';


export default class WelcomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{width: 100 + "%", height: 18 + "%", justifyContent:"center"}}>
        <Text style={{ fontSize:40, textAlign:"center", color:"blue"}}>
        PIEGOL
        </Text>
        </View>
        <View style={{width: 90 + "%", height: 55 + "%", justifyContent:"center"}}>
        <Swiper style={{width:100 + "%",marginBottom:12 + "%",marginTop:5 + "%"}}>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end", width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end", width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                  </Swiper>        
        </View>
        <View style={{width: 100 + "%", height: 25 + "%", alignItems:'center',justifyContent: 'space-around'}}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register',{
            paramFrom: 'Welcome',
            otherParam: 1,
            })
          }
        />
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login',{
            paramFrom: 'Welcome',
            otherParam: 2,
            })
          }
        />
        </View>
      </View>

      /*
      <View style={{ flex:1, alignItems: "center", justifyContent: "center"}}>

        <View style={{ flex:1, width:90 + "%", height:100,backgroundColor:"rgba(123,234,123,0.4)"}}> 

        <View style={{flex:1, width:100 + "%",backgroundColor:"rgba(234,123,123,0.4)" }}>
        <Swiper index={1} style={{flex:1,width:100 + "%",marginBottom:15 + "%",marginTop:5 + "%"}}>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",backgroundColor:"rgba(255,255,255,1)", width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",backgroundColor:"rgba(255,255,255,1)", width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                      <View style={{flex:1,alignItems:"center",justifyContent:"flex-end",backgroundColor:"rgba(255,255,255,1)", width:100 + "%"}}>
                          <Image
                            source={require('../../images/logo.png')}
                            style={{width:200, height:150}}                          
                          />
                          <Text style={{paddingTop:30, fontSize:20, textAlign:"center"}}>
                          Accede a contenido en cualquier lugar y momento, incluso puedes guardar contenido para usarlo sin conexión.
                          </Text>
                      </View>
                  </Swiper>
        </View>        
        
        </View>
        <View style={{margin:10}}>
        <Button
          title="Register"
          onPress={() => this.props.navigation.navigate('Register',{
            paramFrom: 'Welcome',
            otherParam: 1,
            })
          }
        />
        
        <Button
          title="Login"
          onPress={() => this.props.navigation.navigate('Login',{
            paramFrom: 'Welcome',
            otherParam: 2,
            })
          }
        />
        </View>
      </View>
*/
    );
  }
}
