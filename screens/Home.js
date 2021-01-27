import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB } from 'react-native-paper';



const Home = ({navigation}) => {
    const data = [
        { id: "1", nome: "Jose",email: "jose@email.com",salario: "R$ 2.000 ",telefone: "19-9999-1111", cargo: "Empregado", imagem: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"},
        { id: "2", nome: "Jonas",email: "jonas@jonas.com",salario: "R$ 2.550",telefone:"19-9999-1111", cargo: "Suporte Tecnico", imagem: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" },
        { id: "3", nome: "Mateus", email: "jonas@jonas.com",salario: "R$ 2.550",telefone:"19-9999-1111", cargo: "Administrador", imagem: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" },
        { id: "4", nome: "Aloisio", email: "jonas@jonas.com",salario: "R$ 2.550",telefone:"19-9999-1111", cargo: "CEO", imagem: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" },
      
    ]

    const renderList = data.map((item) => {
        return (
            <Card style={styles.mycard}
                onPress={() => navigation.navigate("Profile", {item})}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" }}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>{item.nome}</Text>
                        <Text style={styles.text}>{item.cargo}</Text>
                    </View>


                </View>

            </Card>
        )
    })
    return (
        <View style={{flex: 1}}>
            <FlatList
                data={data}
                renderItem={({ item }) => {
                    return renderList(item)
                }}
                keyExtractor={item => item.id}
            />

            <FAB onPress={() => {
                navigation.navigate("CriarEmpregado")
            }}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors: {accent: "#006aff"}}}
            />




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
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home