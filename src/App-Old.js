// import React, { useState } from 'react';
// import TodoList from "./TodoList";

function App() {
  const [state, setState] = useState({ count: 4, theme: "blue" });
  const count = state.count;
  const theme = state.theme;

  function decr() {
    setState(prevState => {
      return { count: prevState.count - 1 }
    });
  }

  function incr() {
    setState(prevState => {
      return { count: prevState.count + 1 };
    });
  }
  return (
    <>
      <button onClick={decr}> - </button>
      <span>{count} count</span>
      <button onClick={incr}> + </button>
      <TodoList todoList={[{ key: 'first', name: 'first', complete: false }]} toggleTodo={false}></TodoList>
    </>
  );
}

// export default App;