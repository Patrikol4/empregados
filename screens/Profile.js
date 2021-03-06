import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal, Linking, Platform } from 'react-native';
import { Card, FAB, TextInput, Button, Title } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';


const Profile = (props) => {

    const {id, nome, imagem, salario, email, telefone, cargo} = props.route.params.item

    const openDial =() => {
        if(Platform.OS === 'android'){
            Linking.openURL("tel:12345")
        } else {
            Linking.openURL("telprompt:12345")
        }
    }


    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{ alignItems: "center"}}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: imagem }}
                />
            </View>
            <View style={{ alignItems: 'center', margin: 15 }}>
                <Title>{nome}</Title>
                <Text style={{fontSize: 15}}>
                    {cargo}
                </Text>
                <Text style={styles.mytext}>
                    Bem-vindo ao Perfil
            </Text>
            </View>

            <Card style={styles.mycard} onPress={() => {
                Linking.openURL("mailto:someone@example.com")
            }}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Email : {email}</Text>
                </View>
            </Card>

            <Card style={styles.mycard} onPress={() => openDial()}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Número : {telefone}</Text>
                </View>
            </Card>

            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <Text style={styles.mytext}>Salário : {salario}</Text>
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