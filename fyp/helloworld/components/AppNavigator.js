//Author : Oisin Wilson (C00213826)
// This is the navigation point for the app with all of the screen codes

import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';
import CircleViewManager from './CircleViewManager';
import BranchView from './BranchView';
import ChartViewManager from './ChartViewManager';
import PiView from './pi';
import PolarView from './polar';
import SymptomInputScreen from './SymptomInputScreen';
import InputScreen from './InputManager';
import ScanScreen from './ScanScreen';
import Switch from './Slider';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen, navigationOptions: {header: null} },
  Calendar: { screen: CalendarScreen, navigationOptions: {header: null}},
  SCV: {screen: CircleViewManager},
  BV: {screen: BranchView},
  CV: {screen: ChartViewManager},
  PI: {screen:PiView},
  PO: {screen: PolarView},
  INPUTSYMP: {screen: SymptomInputScreen},
  INPUT: {screen: InputScreen, navigationOptions: {header: null}},
  SCAN: {screen: ScanScreen, navigationOptions: {header: null},},
  SLIDE: {screen: Switch},
});

export default  AppNavigator;