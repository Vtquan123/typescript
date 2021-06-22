import { ActionTypes } from './types';
import axios from 'axios'
import { Dispatch } from 'redux'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos
  payload: Todo[]
}

export interface DeleteAction {
  type: ActionTypes.deleteTodo
  payload: number
}

const url = 'https://jsonplaceholder.typicode.com/todos'

export const fetchTodos = () => {
  return async (dispatch:Dispatch) => {
    const response = await axios.get<Todo[]>(url)

    // Prevent confusing of a ton of code of actionCreator, make sure you pass correctly object to dispatch's argument 
    dispatch<FetchTodoAction>({
      type: ActionTypes.fetchTodos,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteAction => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id
  }
}