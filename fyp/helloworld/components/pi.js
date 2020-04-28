import * as React from 'react';
import * as Native from 'react-native';
import * as Chart from 'victory-native';

export default class PiView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      DisplayOne: 0
    };
  }

  render() {
    return (
      <Native.View style={styles.MainContainer}>

      

      {this.state.DisplayOne ? (
        <Chart.VictoryPie
            data={[
                { x: "Vomit", y: 35 },
                { x: "HeadAche", y: 40 },
                { x: "Cramp", y: 55 }
            ]}
            />
      ) : null}

        

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