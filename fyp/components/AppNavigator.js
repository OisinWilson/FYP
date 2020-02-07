
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './HomeScreen';
import CalendarScreen from './Calendar';
import SymptomCircle from './SymptomCircleView'

const AppNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Calendar: { screen: CalendarScreen},
  SCV: {screen: SymptomCircle}
});

export default  AppNavigator;