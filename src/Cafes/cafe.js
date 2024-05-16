import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';

const cafe = () => {
  const [ovos, setCafe] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarDadosDoBin = async () => {
      try {
        const response = await axios.get('https://api.jsonbin.io/v3/b/663c01fbad19ca34f8667d65');
        setCafe(response.data.record);
        setLoading(false);
      } catch (error) {
        console.error('Erro ao carregar os dados do bin:', error);
        setLoading(false);
      }
    };

    carregarDadosDoBin();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.type}>{item.type}</Text>
      <Text style={styles.price}>Preço: R$ {parseFloat(item.price).toFixed(2)}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {ovos.map((item) => (
        <View key={item.id} style={styles.item}>
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.brand}>{item.brand}</Text>
          <Text style={styles.type}>{item.type}</Text>
          <Text style={styles.price}>Preço: R$ {parseFloat(item.price).toFixed(2)}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    width: '55%', 
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 10,
  },
  brand: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  type: {
    fontSize: 16,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginBottom: 10,
    color: '#007bff',
  },
});

export default cafe;
