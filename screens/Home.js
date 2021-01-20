import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Card } from 'react-native-paper';



const Home = () => {
    const data = [
        {id: 1, nome: "Jose", cargo: "Empregado"},
        {id: 2, nome: "Jonas", cargo: "Suporte Tecnico"},
        {id: 3, nome: "Mateus", cargo: "Dono"},
        {id: 4, nome: "Aloisio", cargo: "Tesoureiro"},
    ]

    const renderList = data.map((item) => {
        return (
            <Card style={styles.mycard} key={item.id}>
            <View style={styles.cardView}>
                <Image
                    style={{ width: 60, height: 60, borderRadius: 30 }}
                    source={{ uri: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" }}
                />
                <View style={{marginLeft: 10}}>
                    <Text style={styles.text}>{item.nome}</Text>
                    <Text style={styles.text}>{item.cargo}</Text>
                </View>


            </View>

        </Card>
        )
    })
    return (
        <View>
          
            { renderList }
        
        </View>

    )
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,


    },
    cardView: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 20,
        
    }
})

export default Home