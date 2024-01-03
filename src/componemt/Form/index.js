import {View, Text, TextInput, TouchableOpacity, Keyboard} from 'react-native';
import React, {useState} from 'react'
import style from './style';
const From = (props) => {
  const [task, setTask] = useState('');
  const handleAddTask = () =>{
    if (task.length === 0) {
      alert('Bạn vui lòng nhận Task')
      return false;
    }
    props.onAddTask(task);
    setTask('')
    Keyboard.dismiss();
  }
  return (
    <View style={style.addTask}>
      <TextInput
        value={task}
        onChangeText={text => setTask(text)}
        placeholder="Nhập task"
        style={style.input}
      />
      <TouchableOpacity onPress={handleAddTask}>
        <View style={style.iconWrapper}>
          <Text style={style.icon}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default From;