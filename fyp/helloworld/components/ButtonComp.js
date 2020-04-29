

import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';


const getIcon = (type, active) => {
    let icn;
    switch (type) {
    case 'Open':
        icn = active
            ? require('./ASSETS/IMAGES/ACTIVE/notstarted.png')
            : require('./ASSETS/IMAGES/INACTIVE/notstarted.png');
        break;
    case 'In Progress':
        icn = active
            ? require('./ASSETS/IMAGES/ACTIVE/inprogress.png')
            : require('./ASSETS/IMAGES/INACTIVE/inprogress.png');
        break;
    case 'Complete':
        icn = active
            ? require('./ASSETS/IMAGES/ACTIVE/complete.png')
            : require('./ASSETS/IMAGES/INACTIVE/complete.png');
        break;
    }
    return icn;
};

const Button = props => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
                <Image source={getIcon(props.type, props.active)} />
            </TouchableOpacity>
        </View>
    );
};

Button.propTypes = {
    type: PropTypes.string,
    active: PropTypes.bool,
    onPress: PropTypes.func
};

Button.defaultProps = {
    active: false
};

export default Button;