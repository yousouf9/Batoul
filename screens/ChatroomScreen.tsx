import React, { Component } from 'react';
import { FlatList, Text,ImageBackground  } from 'react-native';
import {  useRoute } from '@react-navigation/native'
import  chatRoomData from '../data/chat';
import ChatMessage from '../components/ChatMessage';
import  chatBackgroundImage from '../assets/images/screenbg.png'
const ChatRoomScreen =() =>{
    const route = useRoute();
      
    return (
        <ImageBackground 
            style={{width:"100%", height:"100%"}}
            source={chatBackgroundImage}
        >
            <FlatList
                data={chatRoomData.meessages}
                renderItem={({item})=> <ChatMessage messages={item}/>}
                inverted
            />
        </ImageBackground>

    )
}

export default  ChatRoomScreen