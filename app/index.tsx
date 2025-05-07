import React from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import { Link, Stack, Tabs, router } from 'expo-router';
import { MaterialCommunityIcons, Ionicons, FontAwesome5 } from '@expo/vector-icons';

export default function HomePage() {
  return (
    <>
      <Stack.Screen 
        options={{
          title: 'Orar con Jesús',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Link href="/(app)/calendario" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-month" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Calendario Litúrgico de Chile</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santoral" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="calendar-star" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Santoral</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/virtudes" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-pulse" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Las virtudes</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/resumen-doctrina" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Resumen de la Doctrina Cristiana</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/sacramentos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="church" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Los Sacramentos de la Iglesia</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/vida-cristiana" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La Vida Cristiana</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-open-page-variant" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones de Siempre</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/evangelio" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Evangelio del Día</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/liturgia" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="clock-outline" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Liturgia de las Horas</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-noche" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="weather-night" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones de la Noche</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santa-misa" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="bread-slice" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>La Santa Misa</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/santo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="church" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Santo del Día</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/adoracion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <Ionicons name="sunny" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Adoración al Santísimo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/confesion" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-plus" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Confesión Sacramental</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/trinidad" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="triangle-outline" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones a la Santísima Trinidad</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-jesus" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-outline" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones a Nuestro Señor Jesucristo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-espiritu" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="fire" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones al Espíritu Santo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-maria" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="account-heart" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones a la Virgen María</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-jose" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="flower-tulip" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones a San José</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/devociones-moribundo" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="heart-pulse" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Devociones para acompañar a un enfermo o moribundo</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-difuntos" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="candle" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones por los Difuntos</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/novenas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-cross" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Novenas</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/bendiciones" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="hands-pray" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Otras bendiciones y oraciones</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/(app)/oraciones-diversas" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="book-multiple" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Oraciones Diversas</Text>
            </TouchableOpacity>
          </Link>
          
          <Link href="/(app)/cantoral" asChild>
            <TouchableOpacity style={styles.menuItem}>
              <MaterialCommunityIcons name="music-note" size={32} color={Colors.primary} />
              <Text style={styles.menuText}>Cantoral Breve</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ScrollView>

      <TouchableOpacity 
        style={styles.searchButton}
        onPress={() => router.push('/buscar')}
      >
        <Ionicons name="search" size={24} color="white" />
      </TouchableOpacity>
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
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuText: {
    fontSize: 20,
    marginLeft: 15,
    color: Colors.primary,
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