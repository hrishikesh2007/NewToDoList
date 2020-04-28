import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    headerStyle: {
        height: 40,
        paddingTop: 10,
        backgroundColor: 'teal',
    },

    titleStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#fff'
    }

})

function Header(){
    return(
        <View style={styles.headerStyle}>
            <Text style={styles.titleStyle}>To Do List</Text>
        </View>
    )
}

export default Header;
