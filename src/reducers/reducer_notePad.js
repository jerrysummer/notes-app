import { ADD_NOTE, EDIT_NOTE } from '../helpers/constants';

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