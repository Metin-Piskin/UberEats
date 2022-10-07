import React from 'react';
import { View, Text } from 'react-native';

import About from '../../Components/DetailComponents/About';
import MenuItems from '../../Components/DetailComponents/MenuItems';
import ViewCart from '../../Components/DetailComponents/ViewCart';


const Detail = ({ route, navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      {/*<Divider width={1.8} style={{ marginVertical: 20 }} />*/}
      <MenuItems restaurantName={route.params.name} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  )
}

export default Detail;