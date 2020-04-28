
import * as React from 'react';
import * as Native from 'react-native';
import * as Chart from 'victory-native';
import Svg from 'react-native-svg';

export default class PolarView extends React.Component{
  
      render() {

        return (
            <Native.View style={styles.MainContainer}>
             <Svg width={400} height={400}>
                <Chart.VictoryChart polar
                    theme={Chart.VictoryTheme.material}
                    >
                    {
                        ["cat", "dog", "bird", "dog", "frog", "fish"].map((d, i) => {
                        return (
                            <Chart.VictoryPolarAxis dependentAxis
                            key={i}
                            label={d}
                            labelPlacement="perpendicular"
                            style={{ tickLabels: { fill: "none" } }}
                            axisValue={d}
                            />
                        );
                        })
                    }
                    <Chart.VictoryBar
                        style={{ data: { fill: "tomato", width: 25 } }}
                        data={[
                        { x: "cat", y: 10 },
                        { x: "dog", y: 25 },
                        { x: "bird", y: 40 },
                        { x: "frog", y: 50 },
                        { x: "fish", y: 50 }
                        ]}
                    />
                    </Chart.VictoryChart>
                </Svg>
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