import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { updateDoc, doc, getDoc } from 'firebase/firestore'; 
import { DB } from '../Firebase';

const EditarPlantas = ({ route, navigation }) => {
  const { plantId, plantName, plantNickname } = route.params;
  const [nome, setNome] = useState(plantName);
  const [apelido, setApelido] = useState(plantNickname);

  useEffect(() => {
    const fetchData = async () => {
      const plantDoc = doc(DB, 'plantas', plantId);
      try {
        const plantData = await getDoc(plantDoc);
        if (plantData.exists()) {
          const data = plantData.data();
          setNome(data.nome);
          setApelido(data.apelido);
        }
      } catch (error) {
        console.error('Erro ao obter dados da planta:', error);
      }
    };

    fetchData();
  }, [plantId]);

  const handleEdit = async () => {
    if (!nome || !apelido) {
      alert('Preencha os campos de nome e apelido da planta.');
      return;
    }

    const plantDoc = doc(DB, 'plantas', plantId);
    const updatedData = {
      nome: nome,
      apelido: apelido,
    };

    try {
      await updateDoc(plantDoc, updatedData);
      alert('Plantinha editada com sucesso!');
      navigation.goBack();
    } catch (error) {
      console.error('Erro ao editar planta:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, margin: 20, marginBottom: 30, fontWeight: 'bold' }}>
        Edite sua planta</Text>
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Digite o novo nome da planta"
        value={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={{ width: 300, height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, marginBottom: 10, paddingLeft: 10 }}
        placeholder="Digite o novo apelido que deseja dar a sua planta"
        value={apelido}
        onChangeText={(text) => setApelido(text)}
      />
      <View style={{ gap: 10, margin: 20 }}>
        <Button title="Editar Planta" color="blue" onPress={handleEdit} />
      </View>
    </View>
  );
};

export default EditarPlantas;
