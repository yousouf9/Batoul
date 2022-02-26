
import React from 'react';
import { Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import { ChatRoom } from '../../types';
import styles from './style';
import { useNavigation } from '@react-navigation/native';


export type ChatListProps = {
    chatRoom:ChatRoom;
}


const ChatListItem = (props:ChatListProps)=>{
    const {chatRoom} = props
    const user = chatRoom.users[0]
     const navigation =  useNavigation()
    
    const handlePress = (e:any) =>{

        navigation.navigate("Chatroom", {
            id: chatRoom.id,
            name:user.name,
            image: user.imageUri,
        });
    }
   return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.contaier}>
                <View style={styles.leftContainer}>
                    <Image source={{uri:user.imageUri}} style={styles.avater}/>
                    <View style={styles.midContainer}>
                        <Text style={styles.username}>{user.name}</Text>
                        <Text style={styles.lastMessage}>{chatRoom.lastMessage.content}</Text>
                    </View>
                </View>
                <Text 
                        style={styles.time}
                        numberOfLines={1}
                        ellipsizeMode={'tail'}
                >
                    {chatRoom.lastMessage.createAt}
                </Text>
            </View>
        </TouchableWithoutFeedback>
   )
}
export default ChatListItem;