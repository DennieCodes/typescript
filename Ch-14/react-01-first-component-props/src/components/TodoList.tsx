import React from "react";

// Typescript describing props for this component which is an array of objects
// with id: string, and text: string
interface TodoListProps {
  items: { id: string; text: string }[];
}

// FC tells Typescript that this is a functional component that accepts <TodoListProps>
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};

export default TodoList;
