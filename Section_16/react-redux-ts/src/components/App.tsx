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

///////////////////////////////////////////////////
type literalType = {
  first: 1;
  second: 2;
};

type Result = {
  [key in literalType[keyof literalType]]: number;
};

///////////////////////////////////////////////////
type ObjectTypeA = {
  firstProp: number;
  sharedProp: string;
};

type ObjectTypeB = {
  secondProp: boolean;
  sharedProp: string;
};

type Union = ObjectTypeA | ObjectTypeB;

///////////////////////////////////////////////////
type A = "a" | "b";
type B = "b" | "c";
type C = A & B;

///////////////////////////////////////////////////
type conditional<T, A> = T extends A ? A : T;

///////////////////////////////////////////////////
type Exclude<T, A> = T extends A ? never : T;
// Inferred Type: "a" | "b"
type Result1 = Exclude<1 | "a" | 2 | "b", number>;

///////////////////////////////////////////////////
type Extract<T, A> = T extends A ? T : never
// Inferred Type: 1 | 2
type Result2 = Extract<1 | "a" | 2 | "b", number>;

///////////////////////////////////////////////////
type UppercaseWes = Uppercase<"wes">;
type LowercaseWes = Lowercase<"Wes">;
type CapitalizeWes = Capitalize<"wes">;
type UncapitalizeWes = Uncapitalize<"Wes">;

///////////////////////////////////////////////////
//React.HTMLProps<HTMLXXXElement>
const Input = (props: React.HTMLProps<HTMLInputElement>)

///////////////////////////////////////////////////
//Copying Props
//We can create a type for props out of the prop type of another component—even if we don't have direct access to the type itself.
type CopiedProps = React.ComponentProps<typeof CurrentUser>
  
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);
