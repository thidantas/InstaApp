import React from 'react';
import {View, Text} from 'react-native';
import HomeIcon from '../../assets/icons/home.svg';

const Feed = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FF0000',
    }}>
    <HomeIcon width={21} height={21} />
    <Text>TELA FEED</Text>
  </View>
);

export default Feed;
