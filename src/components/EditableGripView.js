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

import React from 'react'
import PropTypes from 'prop-types'
import {View, Picker} from 'react-native'
import AppText from './AppText'
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {K} from '../utils/constants'

class EditableGripView extends React.Component {

  static propTypes = {
    session: PropTypes.object.isRequired,
    board: PropTypes.object.isRequired,
    currGripId: PropTypes.string.isRequired,
    selectCb: PropTypes.func.isRequired,
    showCb: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {edit: false}
  }

  changeGrip = () => {
    this.setState({edit: true})
  }

  selectGrip = (gripId) => {
    this.setState({edit: false})
    this.props.selectCb(gripId)
  }

  showBoard = () => {
    this.props.showCb()
  }

  buildGripChoices = (board) => {
    let itemArr = []
    // painful realization that stringy number keys are suboptimal
    const sorted = board.get('grips').sortBy((v,k) => parseInt(k))
    sorted.mapKeys(gripId => {
      itemArr.push(<Picker.Item
        label={board.getIn(['grips',gripId]).get('name')}
        value={gripId}
        key={gripId}/>
      )
    })
    return itemArr
  }

  render() {
    const {session, board, currGripId} = this.props
    if (!this.state.edit) {
      return (
        <View style={styles.row}>
          <AppText size='lg'>{session.get(K.GRIP)}</AppText>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Change grip'}
            onPress={this.changeGrip}
            style={[styles.editButton]}>
            <Icon name='mode-edit' size={24} color='black'/>
          </TouchableOpacity>
          <TouchableOpacity
            accessible={true}
            accessibilityLabel={'Show board'}
            onPress={this.showBoard}
            style={[styles.editButton]}>
            <Icon name='image' size={24} color='black'/>
          </TouchableOpacity>
        </View>
      )
    } else {
      return (
        <View style={styles.row}>
          <Picker
            style={styles.picker}
            selectedValue={currGripId}
            onValueChange={(itemValue, itemIndex) => this.selectGrip(itemValue, itemIndex)}
            >
            {this.buildGripChoices(board)}
          </Picker>
        </View>
      )
    }

  }
}

const styles = StyleSheet.create({
  row: {
    flex: .5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  details: {
    color: '#878787',
    fontSize: 32,
  },
  editButton: {
    padding: 10,
  },
  picker: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: 'white',
    // fontSize: 32,  // doesn't work on Android...
    width: 100,
  }
})

export default EditableGripView
