import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      let id = Date.now();
      action.payload.id = id;
      return [...state, action.payload];
    case EDIT_NOTE:
      let editID = action.payload.id;
      let newState = [...state];
      let editIdx = null;
      newState.forEach((note, index) => {
        if (editID === note.id) {
          editIdx = index;
        }
      })
      newState[editIdx] = action.payload;
      return newState;
    case DELETE_NOTE:
      let deleteID = action.payload;
      let newDeletedState = [...state];
      let deleteIdx = null;
      newDeletedState.forEach((note, index) => {
        if( deleteID === note.id) {
          deleteIdx = index;
        }
      })
      newDeletedState.splice(deleteIdx, 1);
      return newDeletedState;
    default:
      return state;
  }
}


const initialState = [
  {
    title: 'Demo 1',
    content: 'Text 1',
    color: 'red',
    id: 0,
  },
  {
    title: 'Demo 2',
    content: 'Text 2',
    color: 'green',
    id: 1,
  },
  {
    title: 'Demo 3',
    content: 'Text 3',
    color: 'yellow',
    id: 2,
  },
  {
    title: 'Demo 4',
    content: 'Text 4',
    color: 'blue',
    id: 3,
  },
];
