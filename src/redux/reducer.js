import { createSlice } from "@reduxjs/toolkit";


const initialState = [];

const addTodoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    //update todos
    updateTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            item: action.payload.item,
          };
        }
        return todo;
      });
    },
    //completed
    completeTodos: (state, action) => {
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            completed: true,
          };
        }
        return todo;
      });
    },
    listSpellsType: (state, action) => {
      console.log( 'action',action) ;
      return {...state,...{listType:action.payload}};
    },
    listSpells: (state, action) => {
      // console.log(action, 'action') ;
      return {...state,...{list:action.payload}};
    },
    favListSpells: (state, action) => {
      console.log(action, 'sharmi') ;
      let favList = []
      return {...state,...{favList:[...action.payload]}};
    },
    DetailedSpell: (state, action) => {
      // console.log(action, 'action') ;
      return {...state,...{DetailedSpellItem:action.payload}};
    },
  },
});

export const {

  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
  listSpells,
  DetailedSpell,
  favListSpells,
  listSpellsType

} = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
