import React from 'react';
import { StyleSheet, ScrollView, Pressable } from 'react-native';
import { Text, View } from '../../../../components/Themed';
import Colors from '../../../../constants/Colors';
import { Stack, router } from 'expo-router';

export default function OracionConcordiaScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Para promover la concordia',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Para promover la concordia</Text>
          </View>

          <View style={styles.prayerCard}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.prayer}>
              Dios del amor, tú eres la suprema unidad y la caridad verdadera.{'\n'}
              Concede a tus fieles tener un solo corazón y una sola alma,{'\n'}
              para que reine entre nosotros la concordia{'\n'}
              y así tu Iglesia, cimentada en la verdad,{'\n'}
              pueda consolidarse en la unidad.{'\n'}
              Por nuestro Señor Jesucristo, tu Hijo{'\n'}
              que vive y reina contigo en la unidad del Espíritu Santo,{'\n'}
              y es Dios, por los siglos de los siglos.
            </Text>
          </View>

          <Pressable 
            style={styles.button}
            onPress={() => router.back()}
          >
            <Text style={styles.buttonText}>Volver al listado</Text>
          </Pressable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    padding: 20,
  },
  headerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  prayerCard: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  prayer: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    lineHeight: 26,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 