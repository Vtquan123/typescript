import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

interface AppProps {
  todos: Todo[];
  // fetchTodos: typeof fetchTodos    Redux will not know what type of fetchTodos => error
  // deleteTodo: typeof deleteTodo
  fetchTodos: Function;
  deleteTodo: Function;
}

interface AppState {
  fetching: boolean;
}

export class _App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { fetching: false };
  }

  onButtonClick = (): void => {
    this.props.fetchTodos();
    this.setState({ fetching: true });
  };

  onTodoClick = (id: number): void => {
    this.props.deleteTodo(id);
  };

  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fetching: false });
    }
  }

  renderList = (): JSX.Element[] => {
    return this.props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => this.onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>Fetch</button>
        {this.state.fetching ? "LOADING" : null}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[] } => {
  return { todos };
};

// const mapDispatchToProps = () => {

// }

type keys = "age" | "name";
type Test = {
  [key in keys]: number;
};

// With ".tsx" file, we need to add Generics to arrow function in form: <OptTest,> / <OptTest extends {}> / <OptTest extends unknown>
const testC = <OptTest,>(prop: OptTest): void => {
  console.log(prop);
};

testC<Test>({ age: 20, name: 60 });

type Obj = Record<string, number>;
const testRecord: Obj = {
  age: 40,
  distance: 60,
  // name: '100'
};

export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
