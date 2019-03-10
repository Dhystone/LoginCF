import React, {Component} from 'react';
import colors from '../styles/colors';

import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet, 
  Text, 
  View,
  Image,
} from 'react-native';

import RoundedButton from '../components/common/buttons'

export default class Welcome extends Component {
  render() {
    return (
    <LinearGradient colors={['#8aa7cb', '#3272cf']} style={styles.linearGradient}>
    	<View style={styles.wrapper}>
	    	<View style={styles.logoWrapper}>
	    		<Image 
	    			source={require('../images/logo.png')}
	    			style={styles.logo}
	    		/>	
	    		<Text style={styles.welcomeText}>
	    			Bienvenido a Piegol!
	    		</Text> 	    		
	    		<Text style={styles.sloganText}>
	    			Organiza, Únete, Juega
	    		</Text> 	    		
	    	</View>
	    	<View style={styles.contentWrapper}>
				<RoundedButton 
					text="CREAR CUENTA PIEGOL"
					textColor='#3272cf'
					background={colors.white}
					textWidth='100%'
				/>
	    		<Text style={styles.msgSocial}>
	    			O regístrate con tu red social preferida:
	    		</Text> 
	    		<RoundedButton 
	    			text="Ingresar con Facebook"
					background='#4267b2'	
					textColor={colors.white}	
					source={require('../images/logo_facebook_white.png')}
					textWidth='65%'
	    		/>
	    		<RoundedButton 
	    			text="Ingresar con Google"
					background={colors.white}	
					source={require('../images/logoGoogle.png')}	
					textWidth='65%'	
	    		/>	    		
	    		<Text style={styles.msgTerms}>
	    			Al Registrarte, indicas que has leído y aceptas los 
	    			Términos de servicio 
	    			y la 
	    			Política de privacidad 
	    		</Text> 	    						
	    	</View>	
	    </View>	
	</LinearGradient>    
    );
  }
}

const styles = StyleSheet.create({
	linearGradient: {
		flex:1,
		display: 'flex',
  	},

	wrapper: {
		flex:1,
		display: 'flex',
		backgroundColor: 'transparent',
		padding:30,

	},
	logoWrapper: {
		marginTop:40,
		backgroundColor:'transparent',
		alignItems:'center',
	},	
	contentWrapper: {
		marginTop:20,
		backgroundColor:'transparent',		
	},	
	logo: {
		width: 160,
		height: 120,
		marginBottom: 20,
	},

  	welcomeText:{
  		color: colors.white,
  		fontSize: 26, 
  		fontWeight: '300',
  	},
  	sloganText:{
  		color: colors.white,
  		fontSize: 18, 
  		fontWeight: '100',  	
  	},
  	msgSocial:{
  		marginTop:40,
  		color: colors.white,
  		fontSize: 16, 
  		fontWeight: '100',  	
  	}, 
  	msgTerms:{
  		marginTop:40,
  		color: colors.white,
  		fontSize: 14, 
  		fontWeight: '100',  	
  	},  	
});
