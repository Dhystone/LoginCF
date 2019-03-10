import React from "react";
import {Image} from "react-native"
import styles from '../../../styles/common/logos/styles'

export default class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../../../images/logo.png')}
        style={styles.logoTitle}
      />
    );
  }
}