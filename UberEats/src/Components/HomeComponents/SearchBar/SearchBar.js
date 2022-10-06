import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchBar = ({ cityHandler }) => {
  return (
    <View style={{ flexDirection: 'row', marginTop: 15 }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyDS5Ty80SnqLg4C1mT2Cc1tyVkET13ElQs", language: 'en' }}
        onPress={(data, details = null) => {
          const city = data.description.split(',')[0]
          cityHandler(city);
        }}
        placeholder='Search'
        styles={{
          textInput: {
            backgroundColor: '#eee',
            borderRadius: 20,
            fontWeight: '700',
            marginTop: 7
          },
          textInputContainer: {
            backgroundColor: '#eee',
            borderRadius: 50,
            flexDirection: 'row',
            alignItems: 'center',
            marginRight: 10,
          },

        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <Ionicon name='location-sharp' size={24} color='black' />
          </View>
        )}
        renderRightButton={() => (
          <View style={{
            backgroundColor: 'white',
            flexDirection: 'row',
            marginRight: 8,
            padding: 9,
            borderRadius: 30,
            alignItems: 'center'
          }}
          >
            <AntDesign name='clockcircle' size={11} color='black' style={{ marginRight: 6 }} />
            <Text>Search</Text>
          </View>
        )}
      />
    </View>
  )
}

export default SearchBar;