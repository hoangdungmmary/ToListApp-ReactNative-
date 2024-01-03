import {StyleSheet} from 'react-native';
import color from '../containts/color';
const style = StyleSheet.create({
    addTask:{
        marginTop : 250,
        bottom: 30,
        paddingHorizontal: 20,
        width: '100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems:'center',
    },
    input:{
        height: 44,
        width:'80%',
        backgroundColor: color.background,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: color.primary,
        paddingHorizontal: 20,
        paddingVertical : 10,
        color: color.text,

    },
    iconWrapper: {
       width: 40,
       height: 40,
       backgroundColor : color.primary ,
       borderRadius: 40,
       alignItems: 'center',
       justifyContent: 'center',
       borderWidth: 3,
       borderColor: color.background,
    },
    icon:{
        fontSize:24,
        color: color.white,
    }
    
})

export default style;