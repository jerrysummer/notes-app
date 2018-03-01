import { ADD_NOTE } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [action.payload, ...state];
    default:
      return state
  }
}


const initialState = [
  {
    title: 'title 1',
    content: 'content 1',
    color: 'color 1',
    id: 0,
  }
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