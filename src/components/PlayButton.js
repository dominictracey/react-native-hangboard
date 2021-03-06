import React from 'react'
import PropTypes from 'prop-types'
import {View, TouchableOpacity, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

const PlayButton = (props) => {
  const iconName = props.running ? 'pause-circle-outline' : 'play-circle-outline'
  return (
    <View>
      <TouchableOpacity
        accessible={true}
        accessibilityLabel={'Stop timer'}
        onPress={props.callback}
        style={styles.timerButton}>
        <Icon name={iconName} size={56} color='black' />
      </TouchableOpacity>
    </View>
  )
}

PlayButton.propTypes = {
  running: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
}

const circle = {
  borderWidth: 0,
  borderRadius: 40,
  width: 80,
  height: 80
};

const styles = StyleSheet.create({
  timerButton: {
    ...circle,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default PlayButton
