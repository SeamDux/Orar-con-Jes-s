import React, { useState, useCallback } from 'react';
import { StyleSheet, ScrollView, TextInput, Pressable, Keyboard } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Definir la estructura de los elementos de búsqueda
interface SearchItem {
  title: string;
  route: string;
  category: string;
  keywords: string[];
}

// Base de datos de búsqueda
const searchData: SearchItem[] = [
  // Santa Misa
  {
    title: 'Santa Misa',
    route: '/santa-misa',
    category: 'Liturgia',
    keywords: ['misa', 'eucaristia', 'liturgia', 'sacrificio', 'comunion', 'cuerpo cristo', 'sangre cristo']
  },
  {
    title: 'Partes de la Misa',
    route: '/santa-misa/partes',
    category: 'Liturgia',
    keywords: ['partes', 'misa', 'liturgia', 'estructura', 'orden']
  },
  {
    title: 'Ritos Iniciales',
    route: '/santa-misa/ritos-iniciales',
    category: 'Liturgia',
    keywords: ['ritos', 'iniciales', 'misa', 'comienzo', 'entrada']
  },
  {
    title: 'Liturgia de la Palabra',
    route: '/santa-misa/liturgia-palabra',
    category: 'Liturgia',
    keywords: ['palabra', 'lecturas', 'evangelio', 'homilia', 'profesion fe']
  },
  {
    title: 'Liturgia Eucarística',
    route: '/santa-misa/liturgia-eucaristica',
    category: 'Liturgia',
    keywords: ['eucaristia', 'ofrendas', 'consagracion', 'padre nuestro', 'comunion']
  },
  {
    title: 'Ritos de Despedida',
    route: '/santa-misa/ritos-despedida',
    category: 'Liturgia',
    keywords: ['despedida', 'bendicion', 'envio', 'final', 'misa']
  },

  // Santoral
  {
    title: 'Santoral',
    route: '/santoral',
    category: 'Devociones',
    keywords: ['santos', 'santoral', 'vidas', 'ejemplos', 'testigos', 'fe']
  },

  // Calendario Litúrgico
  {
    title: 'Calendario Litúrgico de Chile',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['calendario', 'liturgico', 'chile', 'fechas', 'celebraciones', 'tiempos liturgicos']
  },
  {
    title: 'Año Litúrgico',
    route: '/calendario/anio',
    category: 'Liturgia',
    keywords: ['año liturgico', 'tiempos', 'liturgicos', 'adviento', 'navidad', 'cuaresma', 'pascua', 'ordinario', 'ciclo']
  },
  {
    title: 'Solemnidades y Fiestas',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['solemnidades', 'fiestas', 'celebraciones', 'importantes', 'liturgia']
  },
  {
    title: 'Memorias y Ferias',
    route: '/calendario',
    category: 'Liturgia',
    keywords: ['memorias', 'ferias', 'dias', 'semana', 'liturgia']
  },

  // Oraciones por los Difuntos
  {
    title: 'Letanías para la Buena Muerte',
    route: '/oraciones-difuntos/letanias',
    category: 'Oraciones por los Difuntos',
    keywords: ['letanias', 'muerte', 'difuntos', 'oracion']
  },
  {
    title: 'Invocaciones Breves',
    route: '/oraciones-difuntos/invocaciones',
    category: 'Oraciones por los Difuntos',
    keywords: ['invocaciones', 'breves', 'difuntos', 'oracion']
  },
  {
    title: 'Lecturas Bíblicas',
    route: '/oraciones-difuntos/lecturas',
    category: 'Oraciones por los Difuntos',
    keywords: ['lecturas', 'biblia', 'difuntos', 'oracion']
  },

  // Devociones para moribundos
  {
    title: 'Oración a San José',
    route: '/devociones-moribundo/jose',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['san jose', 'moribundo', 'oracion', 'devocion']
  },
  {
    title: 'Unción de los enfermos',
    route: '/devociones-moribundo/uncion',
    category: 'Devociones para acompañar a un moribundo',
    keywords: ['uncion', 'enfermos', 'moribundo', 'sacramento']
  },

  // Sacramentos
  {
    title: 'Bautismo',
    route: '/sacramentos/bautismo',
    category: 'Sacramentos',
    keywords: ['bautismo', 'sacramento', 'iniciacion', 'cristiana']
  },
  {
    title: 'Confirmación',
    route: '/sacramentos/confirmacion',
    category: 'Sacramentos',
    keywords: ['confirmacion', 'sacramento', 'espiritu santo', 'iniciacion']
  },
  {
    title: 'Eucaristía',
    route: '/sacramentos/eucaristia',
    category: 'Sacramentos',
    keywords: ['eucaristia', 'comunion', 'sacramento', 'cuerpo cristo']
  },
  {
    title: 'Reconciliación',
    route: '/sacramentos/reconciliacion',
    category: 'Sacramentos',
    keywords: ['reconciliacion', 'confesion', 'penitencia', 'perdon']
  },
  {
    title: 'Unción de los Enfermos',
    route: '/sacramentos/uncion',
    category: 'Sacramentos',
    keywords: ['uncion', 'enfermos', 'sacramento', 'sanacion']
  },
  {
    title: 'Orden',
    route: '/sacramentos/orden',
    category: 'Sacramentos',
    keywords: ['orden', 'sacerdocio', 'sacramento', 'ministerio']
  },
  {
    title: 'Matrimonio',
    route: '/sacramentos/matrimonio',
    category: 'Sacramentos',
    keywords: ['matrimonio', 'sacramento', 'esposos', 'familia']
  },

  // Resumen de Doctrina
  {
    title: 'Credo del Pueblo de Dios',
    route: '/resumen-doctrina/credo',
    category: 'Resumen de Doctrina',
    keywords: ['credo', 'fe', 'doctrina', 'creencia']
  },
  {
    title: 'Diez Mandamientos',
    route: '/resumen-doctrina/mandamientos',
    category: 'Resumen de Doctrina',
    keywords: ['mandamientos', 'ley', 'moral', 'decalogo']
  },
  {
    title: 'Mandamientos de la Iglesia',
    route: '/resumen-doctrina/mandamientos-iglesia',
    category: 'Resumen de Doctrina',
    keywords: ['mandamientos', 'iglesia', 'preceptos', 'ley']
  },

  // Oraciones y Devociones
  {
    title: 'Oraciones de Siempre',
    route: '/oraciones',
    category: 'Oraciones',
    keywords: ['oraciones', 'rezos', 'devocion', 'piedad']
  },
  {
    title: 'Liturgia de las Horas',
    route: '/liturgia',
    category: 'Oraciones',
    keywords: ['liturgia', 'horas', 'oficio', 'divino']
  },
  {
    title: 'Lecturas del Día',
    route: '/evangelio',
    category: 'Oraciones',
    keywords: ['evangelio', 'lecturas', 'biblia', 'palabra']
  },
  {
    title: 'Oraciones de la Noche',
    route: '/oraciones-noche',
    category: 'Oraciones',
    keywords: ['noche', 'oraciones', 'completas', 'descanso']
  },
  {
    title: 'Santo del Día',
    route: '/santo',
    category: 'Devociones',
    keywords: ['santo', 'santos', 'devocion', 'ejemplo']
  },
  {
    title: 'Devociones al Espíritu Santo',
    route: '/devociones-espiritu',
    category: 'Devociones',
    keywords: ['espiritu santo', 'devociones', 'paraclito', 'consolador']
  },
  {
    title: 'Devociones a la Virgen María',
    route: '/devociones-maria',
    category: 'Devociones',
    keywords: ['maria', 'virgen', 'devociones', 'madre']
  },
  {
    title: 'Otras Bendiciones y Oraciones',
    route: '/bendiciones',
    category: 'Oraciones',
    keywords: ['bendiciones', 'oraciones', 'diversas', 'variadas']
  }
];

export default function BuscarScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<SearchItem[]>([]);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback((text: string) => {
    setSearchQuery(text);
    if (text.trim() === '') {
      setSuggestions([]);
      return;
    }

    const searchTerms = text.toLowerCase().split(' ');
    const filtered = searchData.filter(item => {
      const searchString = [
        item.title.toLowerCase(),
        item.category.toLowerCase(),
        ...item.keywords
      ].join(' ');

      return searchTerms.every(term => searchString.includes(term));
    });

    setSuggestions(filtered);
  }, []);

  const handleSuggestionPress = (item: SearchItem) => {
    setSearchQuery(item.title);
    setSuggestions([]);
    Keyboard.dismiss();
    router.push(item.route);
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Buscar',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={Colors.text} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Buscar oraciones, devociones..."
            value={searchQuery}
            onChangeText={handleSearch}
            placeholderTextColor={Colors.text}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          />
          {searchQuery !== '' && (
            <Pressable onPress={() => handleSearch('')} style={styles.clearButton}>
              <Ionicons name="close-circle" size={20} color={Colors.text} />
            </Pressable>
          )}
        </View>

        {(isFocused || searchQuery !== '') && (
          <ScrollView 
            style={styles.suggestionsContainer}
            keyboardShouldPersistTaps="handled"
          >
            {suggestions.map((item, index) => (
              <Pressable
                key={index}
                style={styles.suggestionItem}
                onPress={() => handleSuggestionPress(item)}
              >
                <Text style={styles.suggestionTitle}>{item.title}</Text>
                <Text style={styles.suggestionCategory}>{item.category}</Text>
              </Pressable>
            ))}
            {searchQuery !== '' && suggestions.length === 0 && (
              <View style={styles.noResults}>
                <Text style={styles.noResultsText}>No se encontraron resultados</Text>
              </View>
            )}
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    margin: 16,
    borderRadius: 10,
    paddingHorizontal: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
    color: Colors.text,
  },
  clearButton: {
    padding: 8,
  },
  suggestionsContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  suggestionItem: {
    backgroundColor: Colors.white,
    padding: 16,
    borderRadius: 10,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  suggestionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  suggestionCategory: {
    fontSize: 14,
    color: Colors.text,
    opacity: 0.7,
  },
  noResults: {
    alignItems: 'center',
    padding: 20,
  },
  noResultsText: {
    fontSize: 16,
    color: Colors.text,
    opacity: 0.7,
  },
}); 