import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const foods = [
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg'
    },
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg'
    },
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg'
    },
    {
        title: 'Lasagna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image: 'https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg'
    },
];

const MenuItems = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food, index) => (
                <View key={index}>
                    <View style={styles.menuItemStyle}>
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
                    </View>
                    {/*<Divider
                        width={0.5}
                        orientation="vertical"
                        style={{ marginHorizontal: 20 }}
                    />*/}
                </View>
            ))}
        </ScrollView>
    )
}

export default MenuItems;

const FoodInfo = (props) => (
    <View style={{ width: 240, justifyContent: "space-evenly" }}>
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = (props) => (
    <View>
        <Image
            source={{ uri: props.food.image }}
            style={{
                width: 100,
                height: 100,
                borderRadius: 8,
            }}
        />
    </View>
);

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 20,
    },

    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    },
});