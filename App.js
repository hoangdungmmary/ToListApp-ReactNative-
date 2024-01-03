import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Task from './src/componemt/Task';
import From from './src/componemt/Form';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const handleAddTask = (task) => {
    setTaskList([...taskList, task]); // Use spread operator to add the new task to the taskList array
  };
  const handleDeteleTask = (index) =>{
    Alert.alert('Thông báo', 'Bạn có chắc muốn xóa', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          let taskListTop = [...taskList];
          taskListTop.splice(index,1);
          setTaskList(taskListTop);
        },
      },
    ]);
  }
  return (
    <View styles={styles.container}>
      <View styles={styles.body}>
        <Text style={styles.header}> To List </Text>
        <ScrollView style={styles.items}>
          {taskList.map((items, index) => {
            return (
              <Task
                key={index}
                title={items}
                number={index + 1}
                onDeteletask={() => handleDeteleTask(index)}
              />
            );
          })}
        </ScrollView>   
      </View>
      <View>
        <From onAddTask={handleAddTask}/>
      </View> 
    </View>
  );
};
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#eff7f8',
  },
  body:{
    flex: 1,
    paddingTop: 50,
    paddingHorizontal :10,
  },
  header:{
    fontSize :30,
    color: '#21a3d0',
    fontWeight: 'bold',
  },
  items: {
    marginTop: 25,
  }
 
})
export default App;
