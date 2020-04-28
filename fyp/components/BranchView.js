
import * as React from 'react';
import * as Native from 'react-native';
import Svg, {Line} from 'react-native-svg';



export default class BranchView extends React.Component {
    constructor() {
        super()
        this.animated = new Native.Animated.Value(0);

        var range = 1, snapshot = 100, radius = 100;

        /// translateX
        var inputRange = [], outputRange = [];
        for (var i=0; i<= (snapshot); ++i) {
            var value = i/snapshot;
            var move = Math.sin(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move); //clockwise
            //outputRange.push(move * -1); //counterclockwise
        }
        this.translateX = this.animated.interpolate({ inputRange, outputRange });

        /// translateY
        var inputRange = [], outputRange = [];
        for (var i=0; i<=snapshot; ++i) {
            var value = i/snapshot;
            var move = -Math.cos(value * Math.PI * 2) * radius;
            inputRange.push(value);
            outputRange.push(move);
        }
        this.translateY = this.animated.interpolate({ inputRange, outputRange });
    }

      animate() {
        this.animated.setValue(0)
        Native.Animated.loop(Native.Animated.timing(this.animated, {
          toValue: 1,
          duration: 1000,//65000,
        })).start();
      }


      render() {
        var CircleInfoList = [];
        //CircleInfoList = this.props.circleListManager; //pass in array of events
        CircleInfoList = [0];

        let CircleManager=[];
 
        const transform = [{ translateY: this.translateY }, {translateX: this.translateX}];

        console.log(JSON.stringify(transform[0].translateY))
        console.log(JSON.stringify(transform[1].translateX))

        let xOne = JSON.stringify(transform[1].translateX);
        let yOne = JSON.stringify(transform[0].translateY);

        CircleInfoList.forEach(element=>{

            CircleManager.push(
             <Native.Animated.View style={[{ transform }]}>
             <Native.TouchableOpacity style={styles.smallCircle}>
                 <Native.Text>hallo</Native.Text>
             </Native.TouchableOpacity>
             </Native.Animated.View>
            ) 
        })

        return (
          <Native.View style={styles.container}>

                <Svg height="100" width="100">
                    <Line x1="1000" y1="1000" x2={xOne} y2={yOne} stroke={"red"} />
                </Svg>

            <Native.View style={styles.CenterPos}>
                {/*<Native.Animated.View style={[{ transform }]}>
                <Native.TouchableOpacity style={styles.smallCircle}>
                    <Native.Text>hallo</Native.Text>
                </Native.TouchableOpacity>
                </Native.Animated.View>
                */}

                {CircleManager}

             

                <Native.TouchableOpacity style={styles.circle} onPress={() => {this.animate()}}>
                    <Native.Text>Test</Native.Text>
                </Native.TouchableOpacity>

              </Native.View>
             

            

          </Native.View>

       
        );
      }
    }

    // define your styles
    const styles = Native.StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
      },
      squairBtn: {
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
      },
      CenterPos:{
        position:'absolute',
        top:300,
        left:180
      },
      circle:{
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        top:-50,
        width: 50,
        height: 50,
        borderRadius: 100,
      },
      smallCircle:{
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 100,
      }
    });