
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';
import CircleViewManager from './CircleViewManager';
import BranchView from './BranchView';
import ChartViewManager from './ChartViewManager';
import PiView from './pi';
import PolarView from './polar';

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen},
  SCV: {screen: CircleViewManager},
  BV: {screen: BranchView},
  CV: {screen: ChartViewManager},
  PI: {screen:PiView},
  PO: {screen: PolarView},
});

export default  AppNavigator;