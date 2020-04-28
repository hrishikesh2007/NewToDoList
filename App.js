import React, { useState } from "react";
import {StyleSheet,View,SectionList, Text} from "react-native";
import Constants from "expo-constants";

import Header from './components/header.js';
import Item from './components/item.js';

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: Constants.statusBarHeight,
  },
  header: {
    fontSize: 20,
    color: 'teal',
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 7
  }
});

function App(){

  const [listData, setListData] = useState([
    {
      id: 1,
      title: "Work",
      data: [
        {
          text: 'MSD',
          key: 1
        },
        {
          text: 'Cosmo',
          key: 2
        },
        {
          text: 'Jackson',
          key: 3
        },
      ]
    }
  ]);  

  const onDeleteHandler = (key) => {
     setListData(
       (prevList) => {
         return (
           prevList.filter(data => key != data.key)
         )
       }
     )
  }

  return(
    <View style={styles.container}>
      <Header />
      <SectionList
        sections={listData}
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ 
          section: { title } }) => (
            <Text style={styles.header}>{title}</Text>
        )}
        renderItem={({ item }) => <Item data={item.text} dataID={item.key} onDeleteHandler={onDeleteHandler}/>}
      />
    </View>
  )
};


export default App;
