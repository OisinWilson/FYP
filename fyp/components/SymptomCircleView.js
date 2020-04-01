import * as React from 'react';
import * as Native from 'react-native';
import moment from 'moment';
import ProgressCircle from 'react-native-progress-circle';




let m_numDaysCurrentMonth;


m_numDaysCurrentMonth = moment( moment().format().substring(0,7) , "YYYY-MM").daysInMonth()


let m_dateDayNum = moment().format("D");
let m_dateDay = moment().format("Do");

m_dateDayNum = 16;  //----------------------------------------------------------------------------------
m_dateDay = "16th";  //----------------------------------------------------------------------------------

let m_circlePercent  = (Number(m_dateDayNum) / Number(m_numDaysCurrentMonth) * 100);

let dayAngleDeg = ( (1 / Number(m_numDaysCurrentMonth)) * 360);
let dayAngleRad = (dayAngleDeg * (Math.PI / 180));




function roteX(posX,posY, centX,centY, angleRad)
{       
    return(Math.cos(angleRad) * (posX - centX) - Math.sin(angleRad) * (posY - centY) + centX);
}   

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



      let counterList = [0,0,0,0];
      let todaysColour ='';
      
      var colourManager = [];
      colourManager = this.props.colourInfoList;

      let setOfCircles = [];

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
      

      var CircleLoopCounter = 1;
      colourManager.forEach(element=>{
        switch (element) {
          case 0:
            /*
 
            
            setOfCircles.push(
              <Native.TouchableOpacity onPress={() => testAlert()} style={circleStyle(rotatedX, rotatedY, this.props.NoInputColour)}>
                <Native.Text>press</Native.Text>  
              </Native.TouchableOpacity>
            ); 
            
           setOfCircles.push(
            <Native.TouchableOpacity onPress={() => testAlert}>
              <Native.View style={circleStyle(rotatedX, rotatedY, this.props.NoInputColour)}/>
            </Native.TouchableOpacity>);
            */

           setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.NoInputColour)}>
                                <Native.TouchableOpacity style={zIndex = 1} onPress={() => testAlert()}>
                                  <Native.Text>X</Native.Text>
                                </Native.TouchableOpacity>
                              </Native.View>);

            counterList[0]++;
            todaysColour = this.props.NoInputColour;
            break;
          case 1:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.GlutenColour)}/>);
            counterList[1]++;
            todaysColour = this.props.GlutenColour;
            break;
          case 2:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.NoGlutenColour)}/>)
            counterList[2]++;
            todaysColour = this.props.NoGlutenColour;
              break;
          case 3:
            setOfCircles.push(<Native.View style={circleStyle(rotatedX, rotatedY, this.props.SymptomOnlyColour)}/>)
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
                  >
                   {/* <Native.Text style={{ fontSize: 18 }}>{"21 Day Challenge"}</Native.Text> */}
                    
                  </ProgressCircle>
                </Native.View>

               

                {setOfCircles} 

                    <Native.View style={{ width: 100, height: 50, backgroundColor: todaysColour, borderRadius:20 ,position:"absolute", top: progressBarY - 60, left: progressBarX + 80}}>
                      <Native.Text style={{ fontSize: 18, textAlign: 'center', marginTop: 10 , color:'white'}}>{m_dateDay + " Day"}</Native.Text>
                    </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 275, left: progressBarX + 10}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[2] == 1?  counterList[2] + " Day\nNo Gluten" : counterList[2] + " Day's\nNo Gluten"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10, this.props.NoGlutenColour)}/>
                </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 275, left: progressBarX + 160}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[1] == 1? counterList[1] + " Day\nGluten" : counterList[1] + " Day's\nGluten"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.GlutenColour)}/>
                </Native.View>

                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 350, left: progressBarX + 160}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[0] == 1? counterList[0] + " Day\nNo Entry" : counterList[0] + " Day's\nNo Entry"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.NoInputColour)}/>
                </Native.View>

              
                <Native.View style={{width: 100, height: 50, position:"absolute", top: progressBarY + 350, left: progressBarX + 10}}>
                  <Native.Text style={{ fontSize: 18, textAlign: 'center' }}>{ counterList[3] == 1? counterList[3] + " Day\nSymptoms Only" : counterList[3] + " Day's\nSymptoms Only"}</Native.Text>
                  <Native.View style={circleStyle(-25, 10,this.props.SymptomOnlyColour)}/>
                </Native.View>

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