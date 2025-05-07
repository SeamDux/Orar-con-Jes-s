import { Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { router } from 'expo-router';

export default function AppLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: Colors.primary,
        },
        headerTintColor: '#fff',
        headerBackTitle: 'Orar con Jesús',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen 
        name="index"
        options={{
          title: 'Orar con Jesús',
          headerShown: true,
          headerRight: () => (
            <Pressable
              onPress={() => router.push('/buscar')}
              style={{ 
                marginRight: 15,
                padding: 8,
              }}
            >
              <Ionicons name="search" size={24} color="white" />
            </Pressable>
          ),
        }}
      />
      <Stack.Screen 
        name="oraciones"
        options={{
          title: 'Oraciones de Siempre',
        }}
      />
      <Stack.Screen 
        name="liturgia"
        options={{
          title: 'Liturgia de las Horas',
        }}
      />
      <Stack.Screen 
        name="evangelio"
        options={{
          title: 'Lecturas del Día',
        }}
      />
      <Stack.Screen 
        name="oraciones-noche"
        options={{
          title: 'Oraciones de la Noche',
        }}
      />
      <Stack.Screen 
        name="santo"
        options={{
          title: 'Santo del Día',
        }}
      />
      <Stack.Screen 
        name="devociones-espiritu"
        options={{
          title: 'Devociones al Espíritu Santo',
        }}
      />
      <Stack.Screen 
        name="devociones-maria"
        options={{
          title: 'Devociones a la Virgen María',
        }}
      />
      <Stack.Screen 
        name="devociones-moribundo"
        options={{
          title: 'Devociones para acompañar a un enfermo o moribundo',
        }}
      />
      <Stack.Screen 
        name="bendiciones"
        options={{
          title: 'Otras bendiciones y oraciones',
        }}
      />
      <Stack.Screen
        name="oraciones-difuntos"
        options={{
          title: 'Oraciones por los difuntos',
          headerRight: () => (
            <Ionicons 
              name="search" 
              size={24} 
              color={Colors.white}
              style={{ marginRight: 15 }}
            />
          ),
        }}
      />
    </Stack>
  );
} 