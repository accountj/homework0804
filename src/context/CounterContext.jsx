import { createContext, useContext, useReducer } from "react";

const CountTodoContext = createContext();

const initialState = {
  todoList: [],
};

const Actions = {
  AddTodo: "AddTodo",
  SetList: "SetList",
};

const reducer = (state, action) => {
  switch (action.type) {
    case Actions.AddTodo:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case Actions.SetList:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
};

const CountTodoContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CountTodoContext.Provider value={{ state, dispatch }}>
      {children}
    </CountTodoContext.Provider>
  );
};

const useCountTodoContext = () => {
  return useContext(CountTodoContext);
};

export { CountTodoContextProvider, useCountTodoContext, Actions };
