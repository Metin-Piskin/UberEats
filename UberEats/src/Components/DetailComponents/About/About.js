import React from 'react';
import { View, Text, Image } from 'react-native';



const About = (props) => {
    const { name, image, price, reviews, rating, categories } = props.route.params;

    const formattedCategories = categories.map((cat) => cat.title).join(" • ");

    const description = `${formattedCategories} ${price ? " • " + price : ""
        } • 🎫 • ${rating} ⭐ (${reviews}+)`;
    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    )
}

export default About;

const RestaurantImage = (props) => {
    return (
        <Image source={{ uri: props.image }} style={{ width: '100%', height: 180 }} />
    )
}

const RestaurantName = (props) => {
    return (
        <Text
            style={{
                fontSize: 29,
                fontWeight: "600",
                marginTop: 10,
                marginHorizontal: 15,
                color: '#000'
            }}
        >
            {props.name}
        </Text>
    )
}

const RestaurantDescription = (props) => {
    return (
        <Text
            style={{
                marginTop: 10,
                marginHorizontal: 15,
                fontWeight: "400",
                fontSize: 15.5,
                color: '#000'
            }}
        >
            {props.description}
        </Text>
    )
}