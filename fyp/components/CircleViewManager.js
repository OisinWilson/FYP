
import React from 'react';
import Native from 'react-native';
import SymptomCircle from './SymptomCircleView';
import moment from 'moment';
import DatabaseManager from './DataBaseManager';


let m_dateStack = [];

export default class CircleViewManager extends React.Component {

    
    CircleViewManager(){
      
    }

    componentDidMount()
    {
        m_dateStack = [];
        /*
        const self = this;

        let m_loopNum = new Date().getUTCDate();

        m_loopNum = 16;//----------------------------------------------------------------------

        if (m_dateStack.length > 0)
        {
            m_dateStack =[];
        }

        for (var i = 1; i <= m_loopNum; i++)
        {
            m_dateStack.push(Math.floor(Math.random() * Math.floor(4)));
        }

        this.setState({data:m_dateStack})
        */

       let maxDateValue = new Date().getUTCDate()

       for (let i = 0; i <= maxDateValue; i++)
       {
         m_dateStack.push(0);
       }
           // Numbers for circle colours
           // 0 == No Input 
           // 1 == gluten
           // 2 == no gluten
           // 3 == Just Symptoms

       DatabaseManager.getInstance().fetchEvents(
         new Date().UTC,
         (_, error) => {alert(error)}, 
         (_, {rows: { _array }}) => (
           _array.forEach(element => {
             if( (new Date (element.created).getUTCMonth()) == new Date().getUTCMonth()
              && (new Date (element.created).getUTCFullYear()) == new Date().getUTCFullYear()
              && (new Date (element.created).getUTCDate()) <= maxDateValue)
              {
                 if (element.symptomId == 2)
                 {
                   if (element.objData[11] == 'Y')
                   { //gluten
                     m_dateStack[new Date (element.created).getUTCDate()] = 1;
                   }
                   else if (element.objData[11] == 'N')
                   { //no gluten
                     m_dateStack[new Date (element.created).getUTCDate()] = 2;
                   }
                 }
                 else if (element.symptomId == 0)
                 {  // only symptoms
                   if (m_dateStack[new Date (element.created).getUTCDate()] == 0)
                   {
                       m_dateStack[new Date (element.created).getUTCDate()] = 3;
                   }
                 }
              }
           }),

           this.setState({data: _array})
         )
       )
    }

    render() {

        return(
            <Native.View style={styles.MainContainer}>

                { this.state && this.state.data &&
                        <SymptomCircle colourInfoList={m_dateStack}
                            progBarX={-140}
                            progBarY={130}
                            progBarBorderWidth={35}
                            progBarBigRadius={130}
                            progBarSmallRadius={12}
                            NoInputColour={'grey'} 
                            GlutenColour={'red'} 
                            NoGlutenColour={'green'} 
                            SymptomOnlyColour={'blue'} 
                            FinishedBackGroundColour={'#3399FF'}
                            UnfinishedBackGroundColour={'#999'}
                            InsideCircleBGColour={'#fff'}
                    />
                }
            </Native.View>
        )
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