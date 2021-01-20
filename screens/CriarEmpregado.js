import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Card, FAB, TextInput } from 'react-native-paper';

const CriarEmpregado = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [cargo, setCargo] = useState("")
    const [salario, setSalario] = useState("")
    const [picture, setPicture] = useState("")
    const [modal, setModal] = useState(false)

    return (
        <View style={styles.root}>
            <TextInput 
                label='Nome'
                style={styles.inputStyle}
                value={name}
                theme={theme}
                mode="outlined"
                onChangeText={text => this.setName(text)}
            />
              <TextInput 
                label='Email'
                style={styles.inputStyle}
                value={email}
                theme={theme}
                mode="outlined"
                onChangeText={text => this.setEmail(text)}
            />
               <TextInput 
                label='Telefone'
                style={styles.inputStyle}
                value={phone}
                theme={theme}
                keyboardType="number-pad"
                mode="outlined"
                onChangeText={text => this.setPhone(text)}
            />
               <TextInput 
                label='Cargo'
                style={styles.inputStyle}
                value={cargo}
                theme={theme}
                mode="outlined"
                onChangeText={text => this.setCargo(text)}
            />
               <TextInput 
                label='Salario'
                style={styles.inputStyle}
                value={salario}
                theme={theme}
                mode="outlined"
                onChangeText={text => this.setSalario(text)}
            />


        </View>
    )
}

const theme = {
    colors: {
        primary: "red"
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    inputStyle: {
        margin: 5
    }
})


export default CriarEmpregado