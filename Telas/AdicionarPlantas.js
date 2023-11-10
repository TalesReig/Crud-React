import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { addDoc, collection } from 'firebase/firestore';
import { DB } from '../Firebase';

const AdicionarPlantas = ({ navigation }) => {
  const [nome, setPlantName] = useState('');
  const [apelido, setPlantNickname] = useState('');

  const create = async () => {
    await addDoc(collection(DB, 'plantas'), {
      nome: nome,
      apelido: apelido
    })
    .then(() =>{
      alert('Plantinha criada com sucesso!');
      setPlantName('');
      setPlantNickname('');
      navigation.navigate('Listar');
    })
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, margin: 20, marginBottom: 30, fontWeight: 'bold' }}>
        Adicione aqui suas plantas</Text>     
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, 
        marginBottom: 10, paddingLeft: 10 }}
        placeholder="Digite o nome da planta"
        value={nome}
        onChangeText={(text) => setPlantName(text)}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, 
        marginBottom: 10, paddingLeft: 10 }}
        placeholder="Digite o apelido que deseja dar a sua planta"
        value={apelido}
        onChangeText={(text) => setPlantNickname(text)}
      />
      <View style={{ gap: 10, margin: 20 }}>
        <Button title="Adicionar Planta" color='blue' onPress={create} />
      </View>
    </View>
  );
};

export default AdicionarPlantas;
