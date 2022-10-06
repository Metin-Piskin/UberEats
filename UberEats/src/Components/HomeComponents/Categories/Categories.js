import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
    {
        image: require("../../../Assets/images/shopping-bag.png"),
        text: "Pick-up",
    },
    {
        image: require("../../../Assets/images/soft-drink.png"),
        text: "Soft Drinks",
    },
    {
        image: require("../../../Assets/images/bread.png"),
        text: "Bakery Items",
    },
    {
        image: require("../../../Assets/images/fast-food.png"),
        text: "Fast Foods",
    },
    {
        image: require("../../../Assets/images/deals.png"),
        text: "Deals",
    },
    {
        image: require("../../../Assets/images/coffee.png"),
        text: "Coffee & Tea",
    },
    {
        image: require("../../../Assets/images/desserts.png"),
        text: "Desserts",
    },
];

const Categories = () => {
    return (
        <View style={{
            backgroundColor: '#fff',
            marginTop: 5,
            paddingVertical: 10,
            paddingLeft: 20
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image
                            source={item.image}
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'contain',
                            }}
                        />
                        <Text
                            style={{
                                color: 'black',
                                fontSize: 13,
                                fontWeight: '900'
                            }}
                        >{item.text}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default Categories;