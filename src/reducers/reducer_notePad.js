import { ADD_NOTE } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.payload];
    default:
      return state;
  }
}


const initialState = [
  {
    title: 'title 1',
    content: 'content 1',
    color: 'red',
    id: 0,
  },
  {
    title: 'title 2',
    content: 'content 2',
    color: 'green',
    id: 1,
  },
  {
    title: 'title 3',
    content: 'content 3',
    color: 'yellow',
    id: 2,
  },
  {
    title: 'title 4',
    content: 'content 4',
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