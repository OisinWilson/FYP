//Author : Oisin Wilson (C00213826)
// This is the render part of the custom made 'Circle Display' component
//  This displays a number of circles reletive to the date in a criclar motion  

import * as React from 'react';
import * as Native from 'react-native';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';



// This sets up constants so that the number of days in the month can be divided into the degrees of a circle
let m_numDaysCurrentMonth = moment( moment().format().substring(0,7) , "YYYY-MM").daysInMonth()

let m_dateDayNum = moment().format("D");
let m_dateDay = moment().format("Do");

let m_circlePercent  = (Number(m_dateDayNum) / Number(m_numDaysCurrentMonth) * 100);

let dayAngleDeg = ( (1 / Number(m_numDaysCurrentMonth)) * 360);
let dayAngleRad = (dayAngleDeg * (Math.PI / 180));



// X point rotation
function roteX(posX,posY, centX,centY, angleRad)
{       
    return(Math.cos(angleRad) * (posX - centX) - Math.sin(angleRad) * (posY - centY) + centX);
}   

// Y point rotation
function roteY(posX,posY, centX,centY, angleRad)
{
 return (Math.sin(angleRad) * (posX - centX) + Math.cos(angleRad) * (posY -centY) + centY);
}




export default class SymptomCircle extends React.Component
{
    render() {

      let smallCircleRadius = this.props.progBarSmallRadius;
      let percentCircleRadius = this.props.progBarBigRadius;
      let percetnBorderWidth = this.props.progBarBorderWidth;
      let progressBarX = this.props.progBarX;
      let progressBarY = this.props.progBarY;
      
      
      
      let centerX = progressBarX + (percentCircleRadius - smallCircleRadius);
      let centerY = progressBarY + (percentCircleRadius - smallCircleRadius);
      
      let circleX = centerX;
      let circleY = centerY - (percentCircleRadius - (smallCircleRadius * 1.5));
      
      let rotatedX = roteX(circleX,circleY,centerX,centerY, (dayAngleRad/2));
      let rotatedY = roteY(circleX,circleY,centerX,centerY, (dayAngleRad/2));



      let counterList = [0,0,0,0];  //This is for the ledgend under the main display
      let todaysColour ='';
      
      var colourManager = []; //This has the bulk of the data passed to it 
      colourManager = this.props.colourInfoList;

      let setOfCircles = [];  //This is where the Circles are stored

      // This is to dynamically change the number of circles
      circleStyle = function(x, y, color) {
        return {
            zIndex : 1,
            width: smallCircleRadius * 2,
            height: smallCircleRadius * 2,
            borderRadius: 100/2,
            backgroundColor: color,
            position: 'absolute', 
            left: x,
            top: y
        }
      }

      
      const testAlert=()=>{
        Native.Alert.alert("test")
      }
      

      //This is the main loop that determins the circles colour, position and rotation
      var CircleLoopCounter = 0;
      colourManager.forEach(element=>{
        switch (element) {
          case 0:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.NoInputColour)} key={CircleLoopCounter}/>);
            counterList[0]++;
            todaysColour = this.props.NoInputColour;
            break;
          case 1:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.GlutenColour)} key={CircleLoopCounter}/>);
            counterList[1]++;
            todaysColour = this.props.GlutenColour;
            break;
          case 2:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.NoGlutenColour)} key={CircleLoopCounter}/>)
            counterList[2]++;
            todaysColour = this.props.NoGlutenColour;
              break;
          case 3:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.SymptomOnlyColour)} key={CircleLoopCounter}/>)
            counterList[3]++;
            todaysColour = this.props.SymptomOnlyColour;
              break;
          default:
            break;
        }
        rotatedX = roteX(circleX,circleY,centerX,centerY, (dayAngleRad * CircleLoopCounter) + dayAngleRad/2 );
        rotatedY = roteY(circleX,circleY,centerX,centerY, (dayAngleRad * CircleLoopCounter) + dayAngleRad/2 );
        CircleLoopCounter++;

      })


        return (
       
            <Native.View style={styles.MainContainer}>
            
              <Native.View style={{position:"absolute", top: progressBarY, left: progressBarX }}>

                <ProgressCircle
                      percent={m_circlePercent }
                      radius={percentCircleRadius}
                      borderWidth={percetnBorderWidth}
                      color = {this.props.FinishedBackGroundColour}
                      shadowColor={this.props.UnfinishedBackGroundColour}
                      bgColor={this.props.InsideCircleBGColour}
                  />
              </Native.View>

               

                {setOfCircles} 

                    <Native.View style={{ width: 100, height: 50, backgroundColor: todaysColour, borderRadius:20 ,position:"absolute", top: progressBarY - 60, left: progressBarX + 80}}>
                      <Native.Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 , color:'white'}}>{m_dateDay + " Day"}</Native.Text>
                    </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 275, left: progressBarX + 30}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[2] == 1?  counterList[2] + " Day\nNo Gluten" : counterList[2] + " Day's\nNo Gluten"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10, this.props.NoGlutenColour)}/>
                </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 275, left: progressBarX + 180}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[1] == 1? counterList[1] + " Day\nGluten" : counterList[1] + " Day's\nGluten"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.GlutenColour)}/>
                </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 350, left: progressBarX + 180}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[0] == 1? counterList[0] + " Day\nNo Entry" : counterList[0] + " Day's\nNo Entry"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.NoInputColour)}/>
                </Native.View>

               
                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 350, left: progressBarX + 30}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[3] == 1? counterList[3] + " Day\nSymptoms Only" : counterList[3] + " Day's\nSymptoms Only"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.SymptomOnlyColour)}/>
                </Native.View>
             
            </Native.View>
           
        );
    }
}

//Css styles
const styles = Native.StyleSheet.create({
    MainContainer:
    {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
    },   
});