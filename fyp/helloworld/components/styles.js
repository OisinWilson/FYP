import { Dimensions, StyleSheet } from 'react-native';
const { width } = Dimensions.get('window');

const ACTIVECOLOR = "rgb(50, 50, 255)";
const INACTIVECOLOR = "rgb(0, 0, 0)";


const Colors = {
    mBackColor: '#efefef',
    mBorderColor: '#efefef',
    white: '#FFFFFF',
    shadowColor: '#A69E9E',
    InputEnterColor:'red',
    NoInputEnterColor:'grey'

};

const Metrics = {
    containerWidth: width - 30,
    switchWidth: width / 2.7
};

const styles = StyleSheet.create({
    container:
    {
      flex: 1,
      alignItems: 'center',
      paddingTop: 60,
      backgroundColor: '#FFFFFF',
    },

    scrollViewOuterContainer:{
      position: 'absolute',
      top: 0,
      bottom: 50,
      left: 0,
      right: 0
    },

    scrollViewInnerContainer:
    {
      flex: 1,
      alignItems: 'center',
      paddingTop: 60,
      backgroundColor: '#FFFFFF',
      height : 1150
    },

    bottomView:{
      width: '100%', 
      height: 70, 
      backgroundColor: '#FF9800', 
      justifyContent: 'center', 
      alignItems: 'center',
      position: 'absolute',
      bottom: 0
    },
    textStyle:{
      color: '#fff',
      fontSize:22
    },
  
    calenderActive:{
      position: 'absolute',
      right: 50,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: ACTIVECOLOR          
    },
    calenderInactive: {
      position: 'absolute',
      right: 50,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: INACTIVECOLOR   
    },
  
    homeActive:{
      position: 'absolute', 
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: ACTIVECOLOR
    },
    homeInactive:{
      position: 'absolute', 
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: INACTIVECOLOR  
    },
  
    InputActive: {
      position: 'absolute',
      left : 50,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: ACTIVECOLOR
    },
    InputInactive : {
      position: 'absolute',
      left : 50,
      width: 50,
      height: 50,
      resizeMode: 'stretch',
      tintColor: INACTIVECOLOR
    },


    BottomTouchLeft : {
      position: 'absolute',
      left:10,
      padding: 5,
      height: 50,
      width: 120,  
      borderRadius: 50
    },

    BottomTouchMid : {
      position: 'absolute',
      padding: 5,
      height: 50,
      width: 120,  
      borderRadius: 50,
    },

    BottomTouchRight : {
      position: 'absolute',
      right:10, 
      padding: 5,
      height: 50,
      width: 120,  
      borderRadius: 50, 
    },
    

    TextInputStyle:{
      position: "absolute", 
      top: 90,
      left:10, 
      height: 40, 
      width: 285, 
      borderColor: 'grey', 
      backgroundColor:'#FFFFFF', 
      borderWidth: 1
    },

    MoodInputNoEntery:{
      top: 20,
      position: "absolute",
      width: "75%",
      height: 100,
      borderRadius: 20,
      backgroundColor: Colors.NoInputEnterColor
    },

    MoodInputYesEntery:{
      top: 20,
      position: "absolute",
      width: "75%",
      height: 100,
      borderRadius: 20,
      backgroundColor: Colors.InputEnterColor
    },

    GlutenInputNoEntry:{
      top: 140,
      position: "absolute",
      width: "75%",
      height: 100,
      borderRadius: 20,
      backgroundColor: Colors.NoInputEnterColor
    },

    GlutenInputYesEntry:{
      top: 140,
      position: "absolute",
      width: "75%",
      height: 100,
      borderRadius: 20,
      backgroundColor: Colors.InputEnterColor
    },

    MealInputNoEntery:{
      top: 260,
      position: "absolute",
      width: "75%",
      height: 100,
      borderRadius: 20,
      backgroundColor: Colors.NoInputEnterColor
    },

    MealInputYesEntery:{
      top: 260,
      position: "absolute",
      width: "75%",
      height: 150,
      borderRadius: 20,
      backgroundColor: Colors.InputEnterColor
    },

    SymptomInputNoEntery0:{
      top: 380,
      position: "absolute",
      width: "75%",
      height: 620,
      borderRadius: 20,
      backgroundColor: Colors.NoInputEnterColor
    },

    SymptomInputNoEntery1:{
      top: 430,
      position: "absolute",
      width: "75%",
      height: 620,
      borderRadius: 20,
      backgroundColor: Colors.NoInputEnterColor
    },

    SymptomInputYesEntery0:{
      top: 380,
      position: "absolute",
      width: "75%",
      height: 620,
      borderRadius: 20,
      backgroundColor: Colors.InputEnterColor
    },

    SymptomInputYesEntery1:{
      top: 430,
      position: "absolute",
      width: "75%",
      height: 620,
      borderRadius: 20,
      backgroundColor: Colors.InputEnterColor
    },

    BarcodeImageButton:{
      position:"absolute",
      left: 10,
      top:40,
      width: 80,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#FFFFFF'
    },

    
    SubmmitButton:{
      position:"absolute",
      left: 10,
      top: 1020,
      width: 390,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#AAAAAF",
      alignItems: 'center',
    },

    SubmmitButton2:{
      position:"absolute",
      left: 10,
      top: 1070,
      width: 390,
      height: 40,
      borderRadius: 20,
      backgroundColor: "#AAAAAF",
      alignItems: 'center',
    },

    BarcodeImage :{
      left: 10,
      width: 60,
      height: 40,
      resizeMode: 'stretch'
    },


    switcher: {
        flexDirection: 'row',
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: Colors.white,
        borderRadius: 28,
        height: 53,
        alignItems: 'center',
        justifyContent: 'center',
        width: Metrics.switchWidth,
        elevation: 4,
        shadowOpacity: 0.31,
        shadowRadius: 10,
        shadowColor: Colors.shadowColor
    },
    buttonStyle: {
        flex: 1,
        width: Metrics.containerWidth / 3,
        height: 54,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
