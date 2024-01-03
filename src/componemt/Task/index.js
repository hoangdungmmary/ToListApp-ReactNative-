import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  } from 'react-native';
import style from './style';
import React from 'react'

const Task = (props) => {
  const {number}= props;
  const numbertext = number < 10 ? `0${number}` : number;
  const itemBg = number % 2 === 0 ? style.event : style.odd;
  return (
    <TouchableOpacity onPress={props.onDeteletask}>
      <View style={style.iTem}>
        <View style={[style.square, itemBg]}>
          <Text style={style.number}>{numbertext}</Text>
        </View>
        <Text style={style.content}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default Task;