import {FetchTodoAction, DeleteAction,} from './todos'

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodoAction | DeleteAction