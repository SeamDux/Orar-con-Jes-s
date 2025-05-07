import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import axios from 'axios';

export default function EvangelioScreen() {
  const [evangelio, setEvangelio] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEvangelio = async () => {
      try {
        // Usando la API de abibliadigital
        const response = await axios.get('https://www.abibliadigital.com.br/api/verses/nvi/mt/1');
        setEvangelio(response.data.text);
        setLoading(false);
      } catch (err) {
        setError('No se pudo cargar el evangelio del día');
        setLoading(false);
      }
    };

    fetchEvangelio();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Evangelio del Día</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.evangelioText}>{evangelio}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    padding: 20,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.white,
  },
  content: {
    padding: 20,
  },
  evangelioText: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: 'center',
    padding: 20,
  },
}); 