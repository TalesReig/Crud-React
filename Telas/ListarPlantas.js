import React, { useState } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { query, getDocs, collection } from 'firebase/firestore';
import { doc, deleteDoc } from 'firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';
import { DB } from '../Firebase';

const ListarPlantas = ({ navigation }) => {
  const [array, setArray] = useState([]);

  const read = async () => {
    const auxArray = [];
    const q = query(collection(DB, "plantas"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const planta = {
        id: doc.id, 
        nome: doc.data().nome,
        apelido: doc.data().apelido,
      }
      auxArray.push(planta);
    });
    setArray(auxArray);
  }

  const handleRemove = async (plantId) => {
    try {
      await deleteDoc(doc(DB, "plantas", plantId));
      alert("Planta reomovida com Sucesso");
      const updatedArray = array.filter(item => item.id !== plantId);
      setArray(updatedArray);
    } catch (error) {
      console.error('Erro ao excluir:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      read();
    }, [])
  );

  return (
    <View>
      <View style={{ gap: 10, margin: 20 }}>
        <Button title="Adicionar Nova Planta" color='blue'
          onPress={() => navigation.navigate('Adicionar')} />
      </View>
      <FlatList
        data={array}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.text}>Nome: {item.nome}</Text>
            <Text style={styles.text}>Apelido: {item.apelido}</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Editar', { plantId: item.id, plantName: item.nome, plantNickname: item.apelido})}>
              <Text style={styles.button}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemove(item.id)}>
              <Text style={styles.button}>Remover</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    color: 'blue',
  },
});

export default ListarPlantas;
