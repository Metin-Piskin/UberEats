import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


const HeaderTabs = () => {
    const [activeTab, setActiveTab] = useState('Delicery');
    return (
        <View style={styles.container}>
            <HeaderButton
                text='Delicery'
                btnColor="black"
                textColor='white'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton
                text='Pickup'
                btnColor="white"
                textColor='black'
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
        </View>
    )
}

export default HeaderTabs;

const HeaderButton = (props) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: props.activeTab === props.text ? 'black' : 'white',
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30
        }}
            onPress={() => props.setActiveTab(props.text)}
        >
            <Text style={{
                color: props.activeTab === props.text ? 'white' : 'black',
                fontSize: 15,
                fontWeight: '900'
            }}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignSelf: "center"
    },
})