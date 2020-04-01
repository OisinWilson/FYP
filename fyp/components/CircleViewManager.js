
import React from 'react';
import Native from 'react-native';
import SymptomCircle from './SymptomCircleView';
import moment from 'moment';

let m_dateStack = [];


export default class CircleViewManager extends React.Component {

    CircleViewManager(){
        
    }

    componentDidMount()
    {
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

    }

    render() {

        return(
            <Native.View style={styles.MainContainer}>

                {this.state &&
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