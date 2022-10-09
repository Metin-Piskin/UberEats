import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import firestore from '@react-native-firebase/firestore';
import LottieView from 'lottie-react-native';

import OrderItem from '../OrderItem';

const ViewCart = ({ navigation }) => {
    const [modleVisible, setModleVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);
    const total = items
        .map((item => Number(item.price.replace('$', ''))))
        .reduce((prev, curr) => prev + curr, 0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency: 'USD',
    });

    const addOrderToFireBase = () => {
        setLoading(true);
        firestore().collection('orders').add({
            items: items,
            restaurantName: restaurantName,
            createdAt: firestore.FieldValue.serverTimestamp(),
        }).then(() => {
            setTimeout(() => {
                setLoading(false)
                navigation.navigate('OrderCompletd');
            }, 2500);
        });
    };

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text>{totalUSD}</Text>
                        </View>
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'center'
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: 'black',
                                    alignItems: 'center',
                                    padding: 13,
                                    borderRadius: 30,
                                    width: 300,
                                    position: 'relative',
                                    flexDirection: 'row',
                                    justifyContent: 'space-evenly'
                                }}
                                onPress={() => { addOrderToFireBase(); setModleVisible(false); }}
                            >
                                <Text style={{ color: 'white', fontSize: 20 }}>Checkout</Text>
                                <Text style={{ color: 'white', fontSize: 15 }}>{total ? totalUSD : ''}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        )
    }

    return (
        <>
            <Modal
                animationType='slide'
                visible={modleVisible}
                transparent={true}
                onRequestClose={() => setModleVisible(false)}
            >
                {
                    checkoutModalContent()
                }
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        position: 'absolute',
                        bottom: 35,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            width: '100%'
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-end',
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            onPress={() => setModleVisible(true)}
                        >
                            <Text style={{ color: 'white', fontSize: 20, marginRight: 30 }}>View Cart</Text>
                            <Text style={{ color: 'white', fontSize: 20, }}>{totalUSD}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ?
                <View
                    style={{
                        backgroundColor: 'black',
                        position: 'absolute',
                        opacity: 0.6,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width:'100%',
                        height:'100%'
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        autoPlay
                        speed={3}
                        source={require('../../../Assets/animations/scanner.json')}
                    />
                </View>
                : <></>}
        </>
    )
}

export default ViewCart;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer: {
        backgroundColor: 'white',
        padding: 16,
        height: 500,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 18,
        marginBottom: 10
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: '600',
        fontSize: 15,
        marginBottom: 10
    },
})