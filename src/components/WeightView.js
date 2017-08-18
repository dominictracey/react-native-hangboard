/**
 * @Author: Dominic Tracey <dpt>
 * @Date:   03-08-2017
 * @Email:  dominic.tracey@gmail.com
 * @Project: Hangboard
 * @Last modified by:   dpt
 * @Last modified time: 08-08-2017
 * @License: MIT
 * @Copyright: (c) 2017 Aquilon Consulting, Inc.
 */

import React, {PropTypes} from 'react'
import {View} from 'react-native'
import AppText from './AppText'

// import {connect} from 'react-redux'
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

class WeightView extends React.Component {

  static propTypes = {
    weight: PropTypes.number,
    title: PropTypes.string.isRequired,
    addCb: PropTypes.func.isRequired,
    removeCb: PropTypes.func.isRequired,
    allowUpdate: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
  }

  render() {
    const {weight, title, addCb, removeCb, allowUpdate} = this.props
    const controls = allowUpdate ? (
      <View style={styles.container}>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Add Weight'}
          onPress={addCb}
          style={styles.timerButton}>
          <Icon name='add-circle-outline' size={32} color='black'/>
        </TouchableOpacity>
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={'Remove Weight'}
          onPress={removeCb}
          style={styles.timerButton}>
          <Icon name='remove-circle-outline' size={32} color='black'/>
        </TouchableOpacity>
      </View>
    ) : null

    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <AppText size='lg'>{title}</AppText>
        </View>
        <View style={[styles.row, styles.rowplus]}>
          <AppText size='xl' align='center' flex='1'>{weight}</AppText>
          {controls}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: .75,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  row: {
    height: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  rowplus: {
    flex: 1.5,
  },
  details: {
    flex: 1,
    color: '#878787',
    fontSize: 32,
    textAlign: 'center',
  },
  timerButton: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: .4,
  },
  weight: {
    flex: 1,
    color: '#878787',
    fontSize: 42,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default WeightView