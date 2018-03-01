import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      let id = state.length;
      action.payload.id = id;
      return [...state, action.payload];
    case EDIT_NOTE:
      let editID = action.payload.id;
      let newState = [...state];
      newState[editID] = action.payload;
      return newState;
    case DELETE_NOTE:
      let deleteID = action.payload;
      let newDeletedState = [...state];
      console.log('tobe', newDeletedState, 'id',deleteID)

      newDeletedState.splice(deleteID, 1);
      newDeletedState = newDeletedState.map((note, index) => {
        return {...note, id: index}
      })
      console.log(newDeletedState)
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


// might not need class
class Note {
  constructor(title, content, color, id) {
    this.title = title;
    this.content = content;
    this.color = color;
    this.id = id;
  }
}

const note = new Note(10, 10);