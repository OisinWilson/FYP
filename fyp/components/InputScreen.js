import * as React from 'react';
import * as Native from 'react-native';
import DatabaseManager from './DataBaseManager';

export default class InputScreen extends React.Component{

    render()
    {
        return(

            <Native.View style={styles.MainContainer}>
                <Native.Text>Temp Text</Native.Text>
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