import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card} from 'react-native-paper';



const Home = () => {

    return (
        <Card style={styles.mycard}>
             <Text style={{fontSize: 22}}>Pagina da Home</Text>
        </Card>
       
    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5
    }
})

export default Home