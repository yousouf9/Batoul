import {StyleSheet} from 'react-native';
import { color } from 'react-native-reanimated';


const styles = StyleSheet.create({
    contaier:{
        flexDirection:'row',
        width:'100%',
        padding: 10,
        justifyContent:'space-between'
    },
    leftContainer:{
      flexDirection:'row',
    },
    midContainer:{
      paddingLeft:10,
      justifyContent:'space-evenly'
    },
    username:{
        fontSize:18,
        fontWeight:'bold'
    },
    lastMessage:{
        fontSize:16,
        color: 'grey'
    },
    time:{
        fontSize:14,
        color: 'grey'
    },
    avater:{
          width:60,
          height:60,
          borderRadius:50,
    }
})

export default styles;