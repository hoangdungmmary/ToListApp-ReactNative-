import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
const HomeScreen = ({navigation}) => {
  const navigate = {useNavigation};
  const nextPage = () => {
    navigation.navigate('ListPage');
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerTop}>
        <TouchableOpacity onPress={nextPage}>
          <View style={styles.top}>
            <Text style={styles.topText}>Top left</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.containerCenter}>
        <View style={styles.center}>
          <Text style={styles.centerText}>Center Text</Text>
        </View>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.bottom}>
          <Text style={styles.bottomText}> Bottom text</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e7feff',
    flex : 1,
  },
  containerTop:{
    backgroundColor: '#e7feff',
    flex : 1,
  },
  containerCenter:{
    backgroundColor: '#e7feff',
    alignItems: 'center',
    flex: 1,
  },
  containerBottom:{
    flex: 1,
  },
  top:{
    marginVertical : 40,
    marginHorizontal : 50,
    backgroundColor: 'pink',
    paddingVertical: 20,
    paddingHorizontal : 20,
    borderWidth :2,
    borderColor : 'bluea3',
  },
  topText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'blue',
  },
  bottom:{
    marginTop:80,
    marginHorizontal:40,
    backgroundColor:'pink',
    paddingVertical:10,
    paddingHorizontal:20,
    borderWidth:3,
    borderColor:'red',
    borderRadius: 20,
  },
  bottomText: {
    textAlign: 'right',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
  },
  center:{
    width: 150,
    height: 150,
    borderRadius: 100,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems:'center',
  },
  centerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },

});
export default HomeScreen;