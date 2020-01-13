import axios from 'axios';

export const READ_EVENTS = 'READ_EVENTS';
export const CREATE_EVENT = 'CREATE_EVENT';

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1';
const QUERTSTRING = '?token=token987239487';

// action creator
export const readEvents = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/events${QUERTSTRING}`)
  dispatch({ type: READ_EVENTS, response })
}

export const postEvent = (values) => async (dispatch) => {
  const response = await axios.post(`${ROOT_URL}/events${QUERTSTRING}`, values)
  dispatch({ type: CREATE_EVENT, response })
}