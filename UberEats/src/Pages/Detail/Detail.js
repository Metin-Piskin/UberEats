import React from 'react';
import { View, Text } from 'react-native';

import About from '../../Components/DetailComponents/About';
import MenuItems from '../../Components/DetailComponents/MenuItems';


const Detail = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      {/*<Divider width={1.8} style={{ marginVertical: 20 }} />*/}
      <MenuItems />
    </View>
  )
}

export default Detail;