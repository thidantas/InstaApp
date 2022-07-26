import React from 'react';
import {SafeAreaView} from 'react-native';
import styles from './styles';

import LogoHome from '../../assets/logo.svg';

const Header = () => (
  <SafeAreaView style={styles.container}>
    <LogoHome width={104} height={30} />
  </SafeAreaView>
);

export default Header;
