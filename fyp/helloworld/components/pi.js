import * as React from 'react';
import * as Native from 'react-native';
import * as Chart from 'victory-native';
import DatabaseManager from './DataBaseManager';
import { element } from 'prop-types';

let m_dataStack =[0,0,0,0]; //symptoms, gluten Pos, gluten Neg, no symptoms
let m_dateStack = [];
let finalData = [0,0,0,0];

export default class PiView extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      DisplayOne: 0
    };
  }


  render() {

    let maxDateValue = new Date().getDate();

    let stack = this.props.InfoList;

    m_dataStack =[0,0,0,0];
    finalData = [0,0,0,0]
    
  
    stack.forEach(element => {
      switch (element) {
        case 0:
          m_dataStack[3]++;
          break;
        case 1:
          m_dataStack[1]++;
          break;
        case 2:
          m_dataStack[2]++;
          break;
        case 3:
          m_dataStack[0]++;
          break;
          
        default:
          break;
      }
    })

    for(var i = 0; i < 4; i++)
    {
      finalData[i] = (m_dataStack[i] / maxDateValue) * 100;
    }




    return (
      <Native.View style={styles.MainContainer}>

    
        <Chart.VictoryPie
            data={[
                { x: "Vomit", y: finalData[0] },
                { x: "HeadAche", y: finalData[1] },
                { x: "Cramp", y: finalData[2] },
                { x: "Stuff", y: finalData[3] },
            ]}
            />

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