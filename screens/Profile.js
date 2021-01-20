import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList, Modal } from 'react-native';
import { Card, FAB, TextInput, Button } from 'react-native-paper';
import { LinearGradient } from 'expo-linear-gradient';


const Profile = () => {
    return (
        <View style={styles.root}>
            <LinearGradient
                colors={["#0033ff", "#6bc1ff"]}
                style={{ height: "20%" }}
            />
            <View style={{alignItems: "center"}}> 
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140/2, marginTop: -50 }}
                    source={{ uri: "https://images.unsplash.com/photo-1492681290082-e932832941e6?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80" }}
                />
            </View>

            <Text>
                Bem-vindo ao Perfil
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
})

export default Profile