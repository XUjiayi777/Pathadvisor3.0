const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
  
defaultConfig.resolver.assetExts = [...defaultConfig.resolver.assetExts, 'bin', 'tflite'];
defaultConfig.resolver.sourceExts = [...defaultConfig.resolver.sourceExts, 'tflite'];

module.exports = defaultConfig;