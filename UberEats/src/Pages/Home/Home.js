import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';

import HeaderTabs from '../../Components/HeaderTabs';
import SearchBar from '../../Components/SearchBar';
import Categories from '../../Components/Categories';
import RestaurantItem from '../../Components/RestaurantItem';
import { localRestaurants } from '../../Components/RestaurantItem/RestaurantItem';

const YELP_API_KEY = "cKkbblZu5hqcH2WYAwqzai-mNkJVRFmGpzNTnQQdGirJOf97wkj0WVYExNl6XJGY5G6hA5jecrSra_fNEkkEvP7khJwyyX4rVbmWQ492xDQeZrMG6Q3irh8g-JE9Y3Yx";

const Home = () => {
    const [restaurantData, setRestaurantData] = useState(localRestaurants);

    const getRestaurantsFromYelp = () => {
        const yelpUrl = 'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles';
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then((json) => setRestaurantData(json.businesses));
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, []);

    return (
        <View style={{ backgroundColor: '#eee', flex: 1 }}>
            <View style={{ backgroundColor: 'white', padding: 15 }}>
                <HeaderTabs />
                <SearchBar />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </View>
    )
}

export default Home;