import { combineReducers } from 'redux';
import sample from './sampleReducer'
import reducer from './reducers'

export default combineReducers({
    sample,
    data: reducer
})