import { ADD_TODO, ADD_TODO_ERROR, ADD_TODO_LOADING, ADD_TODO_SUCCESS, GET_TODO_ERROR, GET_TODO_LOADING, GET_TODO_SUCCESS, REMOVE_TODO } from "./actionTypes"
import { SET_TODO, SET_USERNAME } from "./actionTypes";

export const addTodo = (data) =>({
    type: ADD_TODO,
    payload: data,
})


export const addTodoLoading = () =>{
    return {
        type: ADD_TODO_LOADING
    }
}

export const addTodoError = (err) => {
  return {
    type: ADD_TODO_ERROR,
    payload:err,
  };
};

export const getTodoSuccess = (data)=>{
    return {
        type:GET_TODO_SUCCESS,
        payload:data
    }
}
export const getTodoLoading= () => {
  return {
    type: GET_TODO_LOADING
  };
};
export const getTodoError= (err) => {
  return {
    type: GET_TODO_ERROR,
    payload:err
  };
};
export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id,
});


export const addUsername = (data) => ({
    type: SET_USERNAME,
    payload: data,
});

export const addTodoSuccess = (data) => ({
    type: SET_TODO,
    payload: data,
});
