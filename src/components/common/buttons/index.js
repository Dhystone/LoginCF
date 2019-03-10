import React, {Component} from 'React';
import {
	Text,
	View,
	Image,
	TouchableHighlight,
	StyleSheet,
} from 'react-native';

export default class RoundedButton extends Component{
	render(){
		const {text,textColor,background,handleOnPress,textWidth,source} = this.props;
		const backgroundColor=background||'transparent';
		const color=textColor||'black';
		const width=textWidth || '100%'
				return(
			<TouchableHighlight 
				style={[{backgroundColor},styles.wrapper]}
				onPress={handleOnPress}
			>	
			<View style={styles.contentButton}>
				<Image 
	    			source={source}
	    			style={styles.iconButton}
	    		/>
				<Text 
				style={[{width},{color},styles.buttonText]}>{text}</Text>
			</View>
			</TouchableHighlight>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		padding:10,
		borderRadius:40,
		marginTop:20,
	},
	contentButton:{
		flexDirection:'row',
		display:'flex',
		alignItems: 'center',
		justifyContent:'center',
	},
	buttonText: {
		fontSize: 18,
		textAlign:'center',
	},
	iconButton:{
		paddingLeft:10,
		width: 24,
		height: 24,
	},
})