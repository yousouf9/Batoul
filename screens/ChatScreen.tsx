import { FlatList, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatListItem from '../components/ChatListItem';
import { RootTabScreenProps } from '../types';

import chatroom from '../data/chatroom';

export default function ChatScreen({ navigation }: RootTabScreenProps<'Chats'>) {
  return (
    <View style={styles.container}>
       <FlatList  style={{width:"100%"}}
            data={chatroom}
            renderItem={({item})=>{
              console.log(item);
              
              return <ChatListItem chatRoom={item}/>
            }}
            keyExtractor={(item)=> item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
