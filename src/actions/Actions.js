import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../helpers/constants';

const addNoteToStore = payload => {
  return {
    type: ADD_NOTE,
    payload
  }
}

const editNote = payload => {
  return {
    type: EDIT_NOTE,
    payload
  }
}

const deleteNote = payload => {
  return {
    type: DELETE_NOTE,
    payload
  }
}

export {
  addNoteToStore,
  editNote,
  deleteNote,
}