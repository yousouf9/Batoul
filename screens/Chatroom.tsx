import React, { Component } from 'react';
import { Text } from 'react-native';
import {  useRoute } from '@react-navigation/native'
const ChatRoomScreen =() =>{
    const route = useRoute();
     console.log(route.params.id);
     
    return (
        <Text>{route.params.id}</Text>
    )
}

export default  ChatRoomScreen