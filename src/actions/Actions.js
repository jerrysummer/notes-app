import { ADD_NOTE } from '../helpers/constants';

const addNoteToStore = payload => {
  return {
    type: ADD_NOTE,
    payload
  }
}

export {
  addNoteToStore
}