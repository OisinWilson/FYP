import * as React from 'react';
import * as Native from 'react-native';
import * as Chart from 'victory-native';
import DatabaseManager from './DataBaseManager';
import dataPass from './dataPass';

export default class ChartViewManager extends React.Component{
  
      componentDidMount()
      {
        //dataPass.MealCode = 1;

        DatabaseManager.getInstance().fetchEvents(
          new Date().UTC,
          (_, error) => {alert(error)}, 
          (_, {rows: { _array }}) => (
            _array.forEach(element => {
              console.log(element);
            })))
      }

      render() {


        let data = [
            { quarter: 1, earnings: 13000 },
            { quarter: 2, earnings: 16500 },
            { quarter: 3, earnings: 14250 },
            { quarter: 4, earnings: 19000 }

        ];


        return (
            <Native.View style={styles.MainContainer}>
               <Chart.VictoryChart width={350} theme={Chart.VictoryTheme.material}>
                 <Chart.VictoryBar data={data} x="quarter" y="earnings" />
              </Chart.VictoryChart>
            </Native.View>
        );
      }

}

const styles = Native.StyleSheet.create({
    MainContainer:
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },   
});