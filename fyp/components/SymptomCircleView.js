import * as React from 'react';
import * as Native from 'react-native';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';

let m_currentDate = moment().format();
let m_checkMonthLength = m_currentDate.substring(0,7);

let m_numDaysCurrentMonth = moment(m_checkMonthLength, "YYYY-MM").daysInMonth();
let m_dateNumDay = moment().format("D");

let m_circlePresent = (Number(m_dateNumDay) / Number(m_numDaysCurrentMonth) * 100) ;

let dom =  1 / Number(m_numDaysCurrentMonth);
let dayAngle = (dom * 360);



let centerX = Math.round(Native.Dimensions.get('window').width) / 2;
let centerY = Math.round(Native.Dimensions.get('window').height) / 2;

let circleX = centerX;
let circleY = centerY - 240;


let rotatedX = roteX(circleX,circleY,centerX,centerY,-dayAngle);
let rotatedY = roteY(circleX,circleY,centerX,centerY,-dayAngle);

//let rotatedX = Math.cos(-dayAngle) * (circleX - centerX) - Math.sin(-dayAngle) * (circleY - centerY) + centerX;

//let rotatedY = Math.sin(-dayAngle) * (circleX - centerX) + Math.cos(-dayAngle) * (circleY - centerY) + centerY;



function roteX(posX,posY, centX,centY, angleDeg)
{
  return(Math.cos(angleDeg) * (posX - centX) - Math.sin(angleDeg) * (posY - centY) + centX);
}

function roteY(posX,posY, centX,centY, angleDeg)
{
  return (Math.sin(angleDeg) * (posX - centX) + Math.cos(angleDeg) * (posY -centY) + centY);
}







export default class SymptomCircle extends React.Component
{
    render() {
  
      let setOfCircles = [];

      for(let i = 0; i < 1; i++){
      
        setOfCircles.push(
          <Native.View style={styles.circle, {left:rotatedX, top:rotatedY}}>
                         <Native.Text style={styles.textStyle}> display:{dayAngle }</Native.Text>
          </Native.View>
        )

      }

        return (
            <Native.View style={styles.MainContainer}>

               <ProgressCircle
                    percent={m_circlePresent}
                    radius={120}
                    borderWidth={40}
                    color="#3399FF"
                    shadowColor="#999"
                    bgColor="#fff"
                >
                    <Native.Text style={{ fontSize: 18 }}>{dom}</Native.Text>

                    <Native.View style={[styles.triangle]} />

                </ProgressCircle>

                {setOfCircles}

               <Native.View style={[styles.triangle, styles.triangleDown ]} />

               
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
          paddingTop: ( Native.Platform.OS === 'ios' ) ? 20 : 0,
          backgroundColor: '#FFFFFF',
        },
     
        bottomView:{
          width: '100%', 
          height: 50, 
          backgroundColor: '#FF9800', 
          justifyContent: 'center', 
          alignItems: 'center',
          position: 'absolute',
          bottom: 0
        },
     
        textStyle:{
          color: '#fff',
          fontSize:16,
          textAlign:"center",
          marginTop:20
        },

        circle: {
            width: 50,
            height: 50,
            borderRadius: 100/2,
            backgroundColor: 'blue',
            position: 'absolute', 
        },

        triangle: {
          width: 0,
          height: 0,
          backgroundColor: 'transparent',
          borderStyle: 'solid',
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'red',
        },

        triangleDown: {
          transform: [
            {rotate: '180deg'}
          ]
        },

        triangleLeft: {
          transform: [
            {rotate: '-90deg'}
          ]
        },

        triangleRight: {
          transform: [
            {rotate: '90deg'}
          ]
        },
});