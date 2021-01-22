import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native';
import { Card, FAB, TextInput, Button, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';


const Profile = () => {
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center"}}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" }}
                />
            </View>
            <View style={{ alignItems: 'center', margin: 15 }}>
                <Title>Patrick Souza</Title>
                <Text style={styles.mytext}>
                    Bem-vindo ao Perfil
            </Text>
            </View>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Email : patchsouza@protonmail.com</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Número : 1991859540</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Salário : 2000 Reais</Text>
                </View>
            </Card>

            <View style={{flexDirection: 'row', justifyContent: 'space-around', padding: 10}}>
                <Button icon="account-edit"
                mode="contained"
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    Editar
                </Button>

                <Button icon="delete"
                mode="contained"
                theme={theme}
                onPress={() => console.log('Pressed')}>
                    Apagar Empregado
                </Button>
            </View>

        </View>
    )
}


const theme = {
    colors: {
        primary: "#006aff"
    }
}


const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    mycard: {
        margin: 3
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8
    },
    mytext: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }
})

export default Profile