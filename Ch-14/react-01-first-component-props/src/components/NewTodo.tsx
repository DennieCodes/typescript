import React, { useRef } from "react";

// Set type for incoming function in props from App.tsx
// type is the same as interface
type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

// Typescript: React Functional Component
const NewTodo: React.FC<NewTodoProps> = (props) => {
  // useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  // In TypeScript, useRef to access a DOM element provide the element type as argument and set null as initial value
  const textInputRef = useRef<HTMLInputElement>(null);

  // Function to handle form submission, Typescript: React FormEvent
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textInputRef} />
        <button type="submit">ADD TODO</button>
      </div>
    </form>
  );
};

export default NewTodo;
