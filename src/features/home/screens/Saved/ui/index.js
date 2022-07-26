import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import BookMarkIcon from '../../../assets/icons/bookmark.svg';
import Header from '../../../components/Header';

const SavedContainer = () => (
  <View style={styles.container}>
    <Header />
    <View style={styles.saved}>
      <BookMarkIcon width={21} height={21} />
      <Text>TELA SAVED</Text>
    </View>
  </View>
);

export default SavedContainer;
