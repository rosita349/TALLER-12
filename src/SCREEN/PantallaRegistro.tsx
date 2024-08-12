
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../THEME/Estilos';


interface Props extends StackScreenProps<any,any>{}

export const PantallaRegistro= ({navigation}:Props) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.textTitulo}>Ice Cream</Text>
      <Text style={styles.textSubT}>Fresh and Delicious</Text>
      <TextInput
      placeholder='Numero de Celular'
      style={styles.TextImput}/>
       <TextInput
      placeholder='Nombre Completo' 
      style={styles.TextImput}/>
         <TextInput
      placeholder='Nombre Usuario'
      style={styles.TextImput}/>
       <TextInput
      placeholder='Contraseña' 
      style={styles.TextImput}/>

     <TouchableOpacity
     onPress={() => navigation.navigate('PantallaRegistro')}> 
      <Text style={styles.buttonRegistrarse}>Registrarse</Text> 
      </TouchableOpacity>  

    </View>
  );
};  