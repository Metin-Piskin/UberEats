import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTabs from '../../Components/HomeComponents/HeaderTabs';
import SearchBar from '../../Components/HomeComponents/SearchBar';
import Categories from '../../Components/HomeComponents/Categories';
import RestaurantItem from '../../Components/HomeComponents/RestaurantItem';
import { localRestaurants } from '../../Components/HomeComponents/RestaurantItem/RestaurantItem';
import BottomTabs from '../../Components/HomeComponents/BottomTabs';

const YELP_API_KEY = "KEY";

const Home = ({ navigation }) => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState('LosAngeles');
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=' + city;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) =>
                setRestaurantData(
                    json.businesses.filter((business) =>
                        business.transactions.includes(activeTab.toLowerCase())
                    )
                )
            );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            {/*<Divider width={1} />*/}
            <BottomTabs />
        </View>
    )
}

export default Home;