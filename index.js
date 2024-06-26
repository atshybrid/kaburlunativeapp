/**
 * @format
 */
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { AppRegistry } from 'react-native';
import Root from './src';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => gestureHandlerRootHOC(Root));
