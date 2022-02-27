import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container:{
        padding:8,
        marginLeft:5
    },
    messageBox:{
        padding:10,
        borderRadius:10,
        borderTopLeftRadius: -4

    },
    name:{
        color: Colors.light.tint,
        fontWeight:'bold',
        marginBottom:5
    },
    message:{
      
    },
    time:{
        alignSelf:'flex-end',
        marginTop:5,
        color:'grey'
    }



})

export default styles;