import {
  ADD_TODO,
  ADD_TODO_ERROR,
  ADD_TODO_LOADING,
  ADD_TODO_SUCCESS,
  GET_TODO_ERROR,
  GET_TODO_LOADING,
  GET_TODO_SUCCESS,
   
} from "./actionTypes";
import { SET_TODO, SET_USERNAME } from "./actionTypes";

const init = {username: "", todo: [] , loading: false, todos: [], error: false };

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, payload],
      };
    case ADD_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };
    case ADD_TODO_SUCCESS:
      return {
        ...state,
        todos: [...state.todos, payload],
        loading: false,
      };
    case ADD_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };

    case GET_TODO_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_TODO_SUCCESS:
      return {
        ...state,
        todos: payload,
        loading: false,
      };

    case GET_TODO_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    //NEW
    case SET_USERNAME:
      return {
        ...state,
        username: payload,
      };

    case SET_TODO:
      return {
        ...state,
        todo: payload,
      };

    default:
      return state;
  }
};
