import React from 'react';
import { View, StyleSheet, ImageBackground, ImageBackgroundProps } from 'react-native';

interface BackgroundProps {
  children: React.ReactNode;
  imageSource: any;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  opacity?: number;
  position?: 'top' | 'center' | 'bottom';
  containerStyle?: object;
  imageStyle?: object;
}

export default function Background({ 
  children, 
  imageSource, 
  resizeMode = 'cover',
  opacity = 1.0,
  position = 'center',
  containerStyle = {},
  imageStyle = {}
}: BackgroundProps) {
  // Calcular el estilo de posición basado en el parámetro position
  let positionStyle = {};
  if (position === 'top') {
    positionStyle = { alignItems: 'center', justifyContent: 'flex-start' };
  } else if (position === 'bottom') {
    positionStyle = { alignItems: 'center', justifyContent: 'flex-end' };
  } else { // center por defecto
    positionStyle = { alignItems: 'center', justifyContent: 'center' };
  }

  return (
    <ImageBackground
      source={imageSource}
      style={[styles.background, positionStyle]}
      resizeMode={resizeMode}
      imageStyle={[{ opacity: opacity }, imageStyle]}
    >
      <View style={[styles.container, containerStyle]}>
        {children}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(233, 219, 219, 0.5)', // Capa de superposición para mejorar la legibilidad
  },
});
