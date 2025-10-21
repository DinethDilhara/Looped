const { getDefaultConfig } = require('expo/metro-config');

// Build Metro config synchronously so all fields are reliably applied
const config = getDefaultConfig(__dirname);

// Fix for "missing-asset-registry-path" when bundling images
// This tells Metro where to import AssetRegistry from when processing assets like PNGs
config.transformer = config.transformer || {};
config.transformer.assetRegistryPath = 'react-native/Libraries/Image/AssetRegistry';

module.exports = config;
