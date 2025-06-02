module.exports = {
  expo: {
    extra: {
      eas: {
        projectId: 'bf6414f8-8793-416a-a967-8141f890fb15'
      }
    },
    name: 'Orar con Jesús',
    slug: 'orarconjesus',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    userInterfaceStyle: 'light',
    splash: {
      image: './assets/images/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    assetBundlePatterns: [
      '**/*'
    ],
    ios: {
      supportsTablet: true
    },
    android: {
      package: 'com.orarconjesus.app',
      versionCode: 1,
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      permissions: []
    },
    web: {
      favicon: './assets/images/favicon.png',
      bundler: 'metro'
    },
    plugins: [
      'expo-font',
      'expo-router'
    ],
    scheme: 'orarconjesus'
  }
}; 