import * as React from 'react';
import * as Native from 'react-native';
import moment from 'moment';

let temp = moment();

export default class SymptomCircle extends React.Component
{
    render() {
        return (
            <Native.View style={styles.MainContainer}>
               <Native.View style={styles.circle}>
                    <Native.Text style={styles.textStyle}> display:{ temp.date() }</Native.Text>
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
            width:100,
            height: 100,
            borderRadius: 100/2,
            backgroundColor: 'blue'
        },
});