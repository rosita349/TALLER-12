
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { styles } from '../THEME/Estilos';
import { InputComponent } from '../COMPONENT/InputComponent';
import { ButtonComponent } from '../COMPONENT/ButtonComponent';
interface Props extends StackScreenProps<any,any>{}
// interfas- objeto
interface FormInicio{
  Correo: string;
  Contraseña: string;
}
export const PantallaInicio= ({navigation}:Props) => {
  //hook useState: manipular el estado del formulario
  const[formInicio, setFormInicio] = useState<FormInicio>({
    Correo:'',
    Contraseña:''

  });
// hook useState: permitir que se haga vasible/ no visibles el contenido del password
 const [ hiddenPaswword, setHiddenPaswword] = useState<boolean>(true);
  //funcion para actualizar el estado del formulario
  const handleSetValues= ( name: string, value:string)=>{
    //console.log(name);
    //console.log(value);
    // cambiar el estado del formInicio
    //...operador de propagacion | spred: crea una copia del objeto

    setFormInicio({...formInicio,[name]:value});
}
//funcion para iniciar secion
const handleSingnIn= ()=>{
  console.log(formInicio);
}

  return (
    <View style={styles.Container}>
      <Text style={styles.textTitulo}>Ice Cream</Text>
      <Text style={styles.textSubT}>Fresh and Delicious</Text>
      <InputComponent 
      placeholder='Correo'handleSetValues={handleSetValues}name='Correo' />
      <InputComponent
      placeholder='Contraseña'
      handleSetValues={handleSetValues} 
      name='Contraseña' 
      isPassword ={hiddenPaswword}
      hasIcon={true}
      setHiddenPaswword={()=>setHiddenPaswword (!hiddenPaswword)}/>
     
      <ButtonComponent textButton='iniciar' onPress={handleSingnIn} />
      <TouchableOpacity 
     onPress={() => navigation.navigate('PantallaRegistro')}> 
      <Text style={styles.buttonCuentaNueva}>¿Crear nueva Cuenta?</Text> 
      </TouchableOpacity>
    
    </View>
  );
};  

