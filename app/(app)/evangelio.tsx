import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import axios from 'axios';
import { Stack } from 'expo-router';

interface Lectura {
  id: string;
  titulo: string;
  cita: string;
  introduccion?: string;
  contenido: string;
  conclusion?: string;
}

export default function LecturasScreen() {
  const [lecturas, setLecturas] = useState<Lectura[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchLecturas = async () => {
      try {
        const response = await axios.get('https://liturgia.up.railway.app/v2/evangelio');
        console.log('API Response:', response.data);
        const data = response.data;

        const lecturasDiarias = data.map((lectura: any) => ({
          id: lectura.id,
          titulo: lectura.titulo,
          cita: lectura.cita,
          contenido: lectura.contenido,
          conclusion: 'Palabra del Señor'
        }));

        setLecturas(lecturasDiarias);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching readings:', err);
        setError('No se pudieron cargar las lecturas del día');
        setLoading(false);
      }
    };

    fetchLecturas();
  }, []);

  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Lecturas del Día',
        }}
      />
      {loading ? (
        <View style={styles.container}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      ) : error ? (
        <View style={styles.container}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          {lecturas.map((lectura) => (
            <View key={lectura.id} style={styles.content}>
              <Text style={styles.titulo}>{lectura.titulo}</Text>
              <Text style={styles.cita}>{lectura.cita}</Text>
              <Text style={styles.contenido}>{lectura.contenido}</Text>
              {lectura.conclusion && (
                <View style={styles.conclusionContainer}>
                  <Text style={styles.conclusion}>{lectura.conclusion}</Text>
                  <Text style={styles.respuesta}>{lectura.titulo === 'Evangelio' ? 'Gloria a ti, Señor Jesús' : 'Te alabamos, Señor'}</Text>
                </View>
              )}
            </View>
          ))}
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    textAlign: 'center',
    marginBottom: 10,
  },
  cita: {
    fontSize: 18,
    color: Colors.secondary,
    textAlign: 'center',
    fontStyle: 'italic',
    marginBottom: 20,
  },
  introduccion: {
    fontSize: 18,
    lineHeight: 28,
    textAlign: 'justify',
    marginBottom: 20,
    fontStyle: 'italic',
  },
  contenido: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
  },
  conclusionContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  conclusion: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 10,
  },
  respuesta: {
    fontSize: 18,
    fontStyle: 'italic',
    color: Colors.secondary,
  },
  errorText: {
    fontSize: 18,
    color: Colors.error,
    textAlign: 'center',
    padding: 20,
  },
}); 