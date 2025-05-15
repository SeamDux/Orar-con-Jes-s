import React from 'react';
import { StyleSheet, ScrollView, TouchableOpacity, Platform, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, useRouter, Link } from 'expo-router';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

interface OpcionMenu {
  titulo: string;
  ruta: string;
  icono: keyof typeof MaterialCommunityIcons.glyphMap;
}

const opciones: OpcionMenu[] = [
  {
    titulo: 'Oraciones de Siempre',
    ruta: 'oraciones',
    icono: 'book-open-page-variant'
  },
  {
    titulo: 'Lecturas del Día',
    ruta: 'evangelio',
    icono: 'cross'
  },
  {
    titulo: 'Liturgia de las Horas',
    ruta: 'liturgia',
    icono: 'clock-outline'
  },
  {
    titulo: 'Oraciones de la Noche',
    ruta: 'oraciones-noche',
    icono: 'weather-night'
  },
  {
    titulo: 'Santo del Día',
    ruta: 'santo',
    icono: 'church'
  },
  {
    titulo: 'Jubileo de la Esperanza 2025',
    ruta: 'jubileo',
    icono: 'church'
  },
  {
    titulo: 'Devociones a la Virgen María',
    ruta: 'devociones-maria',
    icono: 'account-heart'
  }
];

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.headerCard}>
            <Text style={styles.mainTitle}>Orar con Jesús</Text>
          </View>

          <Link href="/novenas" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Novenas</Text>
            </Pressable>
          </Link>

          <Link href="/bendiciones" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="hand-heart" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Bendiciones</Text>
            </Pressable>
          </Link>

          <Link href="/oraciones-difuntos" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="candle" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones por los Difuntos</Text>
            </Pressable>
          </Link>

          <Link href="/oraciones-diversas" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones Diversas</Text>
            </Pressable>
          </Link>

          <Link href="/jubileo" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="church" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Jubileo de la Esperanza 2025</Text>
            </Pressable>
          </Link>

          <Link href="/noticias" asChild>
            <Pressable style={styles.menuItem}>
              <MaterialCommunityIcons name="newspaper" size={24} color={Colors.primary} />
              <Text style={styles.menuText}>Noticias de la Diocesis</Text>
            </Pressable>
          </Link>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/oraciones-siempre')}
          >
            <MaterialCommunityIcons 
              name="book-open-page-variant" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Oraciones de Siempre</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/lecturas')}
          >
            <MaterialCommunityIcons 
              name="cross" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Lecturas del Día</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/liturgia')}
          >
            <Ionicons 
              name="time" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Liturgia de las Horas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/oraciones-noche')}
          >
            <Ionicons 
              name="moon" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Oraciones de la Noche</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/santa-misa')}
          >
            <MaterialCommunityIcons 
              name="church" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>La Santa Misa</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/santo-dia')}
          >
            <MaterialCommunityIcons 
              name="church" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Santo del Día</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/adoracion')}
          >
            <Ionicons 
              name="sunny" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Adoración al Santísimo</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/devociones-maria')}
          >
            <MaterialCommunityIcons 
              name="account-heart" 
              size={24} 
              color={Colors.primary} 
            />
            <Text style={styles.menuText}>Devociones a la Virgen María</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      
      <Pressable 
        style={styles.searchButton}
        onPress={() => router.push('/buscar')}
      >
        <Ionicons name="search" size={24} color="white" />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
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
  menuItem: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
    marginLeft: 15,
    flex: 1,
  },
  searchButton: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
}); 