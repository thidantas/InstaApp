import React from 'react';
import {View, Text} from 'react-native';
import HomeIcon from '../../../assets/icons/home.svg';
import Header from '../../../components/Header';
import styles from './styles';

const FeedContainer = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.feed}>
      <HomeIcon width={21} height={21} />
      <Text>TELA FEED</Text>
    </View>
  </View>
);

export default FeedContainer;
