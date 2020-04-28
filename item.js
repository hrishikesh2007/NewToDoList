import React from "react";
import {Text, StyleSheet,View, TouchableOpacity} from "react-native";
import { Entypo } from '@expo/vector-icons';


const styles = StyleSheet.create({
    
    itemGroup: {
      flexDirection: 'row',
    },
  
    checkBoxAndDeleteStyle: {
      marginTop: 9,
    },
  
    item: {
      flex: 1,
      padding: 10,
      marginLeft: 5,
      marginBottom: 5,
      marginRight: 5,
      borderWidth: 0.8,
      borderStyle: 'dashed',
      borderRadius: 10,
      borderColor: '#00adce',
    },
    
    toDoText: {
      fontSize: 12,
      color: 'white'
    },
  
    toDoTextStrikeThrough: {
      fontSize: 12,
      color: 'grey',
      textDecorationLine: 'line-through'
    }
  });
  


const Item = ({ data, dataID, onDeleteHandler }) => {

    const [checked, setChecked] = React.useState(false);
  
    return(
    <View style={styles.itemGroup}>
      {/* <View style={styles.checkBoxAndDeleteStyle}>
        <CheckBox
          checked={checked}
          onChange={nextChecked => setChecked(nextChecked)}>
        </CheckBox>
      </View> */}
      <TouchableOpacity style={styles.item} onPress={() => {
        if (checked == true){ 
          setChecked(false)
        }
        else{
          setChecked(true)
        }
      }}>
        <View>
          <Text style={checked === true ? styles.toDoTextStrikeThrough : styles.toDoText}>{data}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onDeleteHandler(dataID)}>
        <View style={styles.checkBoxAndDeleteStyle}>
          <Entypo name="cross" color='#004d4d' size={18}/>
        </View>
      </TouchableOpacity>
    </View>
    )
  };

export default Item;
