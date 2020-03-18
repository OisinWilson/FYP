
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';
import CircleViewManager from './CircleViewManager'

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen},
  SCV: {screen: CircleViewManager}
});

export default  AppNavigator;