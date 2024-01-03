import {StyleSheet} from 'react-native';
import color from '../containts/color';
const style = StyleSheet.create({
  iTem: {
    flexDirection: 'row',
    backgroundColor: color.primary,
    marginBottom: 15,
    paddingVertical:14,
    paddingHorizontal:20,
    borderRadius:8,
    alignItems:'center',
    justifyContent: 'space-between',
},
  square: {
    width: 50,
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
},
event:{
  backgroundColor: color.green,
},
odd:{
  backgroundColor: color.second,
},
  number: {
        fontSize: 19,
        fontWeight: '700',
        color: color.white,
      },
      content:{
        fontSize: 16,
        width: '80%',
        fontWeight:'bold',
        color : color.text
      },
    
})

export default style;