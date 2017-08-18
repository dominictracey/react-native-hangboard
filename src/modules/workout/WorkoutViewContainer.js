/**
 * @Author: Dominic Tracey <dpt>
 * @Date:   22-07-2017
 * @Email:  dominic.tracey@gmail.com
 * @Project: Hangboard
 * @Last modified by:   dpt
 * @Last modified time: 08-08-2017
 * @License: MIT
 * @Copyright: (c) 2017 Aquilon Consulting, Inc.
 */

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import WorkoutView from './WorkoutView';
import {NavigationActions} from 'react-navigation';
import * as WorkoutStateActions from '../workout/WorkoutState';
//import {K,M} from '../../utils/constants'

export default connect(
  state => ({
    boards: state.getIn(['workout', 'boards']),
    sets: state.getIn(['workout', 'sets']),
    programs: state.getIn(['workout', 'programs']),
    workouts: state.getIn(['workout', 'workouts']),
    session: state.getIn(['workout', 'session']),
  }),
  dispatch => {
    return {
      navigate: bindActionCreators(NavigationActions.navigate, dispatch),
      workoutStateActions: bindActionCreators(WorkoutStateActions, dispatch)
    };
  }
)(WorkoutView);