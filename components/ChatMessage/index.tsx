import moment from "moment";
import React from "react";
import {  Text, View } from "react-native";
import { Message } from "../../types";
import styles from './style';

export type chatMessageProps = {
    messages: Message
}

const ChatMessage = (props:chatMessageProps) => {
  const {id, content, createAt, user} = props.messages;

  const isMyMessage = () => {
      return user?.id === 'u1';
  }
  return (
      <View style={styles.container}>
          <View  style={[
              styles.messageBox,
              {
                  backgroundColor: isMyMessage() ? '#DCF8C5' : '#FFF',
                  marginRight: isMyMessage() ? 5: 100,
                  marginLeft: isMyMessage() ? 100: 5,

              }
          ]}>
            {!isMyMessage() && <Text style={styles.name}>{user?.name}</Text>}
            <Text style={styles.message}>{content}</Text>
            <Text style={styles.time}>{(moment(createAt)).fromNow()}</Text>
          </View>
      </View>
  )
}
export default ChatMessage;