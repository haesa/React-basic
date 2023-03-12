import { useContext, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './App.module.css';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Items from './components/Items';
import { DarkModeContext } from './context/DarkModeContext';

const getLocalStorage = (key) => {
  const data = JSON.parse(window.localStorage.getItem(key));
  return data;
};

const setLocalStorage = (key, value) => {
  const data = JSON.stringify(value);
  window.localStorage.setItem(key, data);
};

const init = getLocalStorage('todos') ?? [];

function App() {
  const [todos, setTodos] = useState(init);
  const [todo, setTodo] = useState('');
  const [filter, setFilter] = useState('All');
  const { darkMode } = useContext(DarkModeContext);

  const addTodo = (event) => {
    event.preventDefault();
    setTodo((prev) => prev.trim());
    console.log(todo);
    if (todo === '') return;

    setTodos((prev) => [...prev, { id: uuidv4(), todo, isChecked: false }]);
    setTodo('');
  };

  const deleteTodo = (event) => {
    const tag = event.target.tagName;
    const parent = event.target.parentNode;
    let target;
    if (tag === 'BUTTON') {
      target = parent.children[0].children[0].id;
    } else if (tag === 'path') {
      target = parent.parentNode.parentNode.children[0].children[0].id;
    } else {
      target = parent.parentNode.children[0].children[0].id;
    }
    setTodos((todos) => todos.filter((item) => item.id !== target));
  };

  useEffect(() => setLocalStorage('todos', todos), [todos]);

  const onCheck = (event) => {
    setTodos((prev) =>
      prev.map((item) =>
        item.id === event.target.id
          ? { ...item, isChecked: event.target.checked }
          : item
      )
    );
  };

  const onChange = (event) => setTodo(event.target.value);

  const onFilter = (event) => {
    setFilter(event.target.innerText);
  };

  return (
    <div className={`${styles.card} ${darkMode && styles.dark}`}>
      <Header todos={todos} filter={filter} onFilter={onFilter} />
      <Items
        todos={todos}
        filter={filter}
        onCheck={onCheck}
        deleteTodo={deleteTodo}
      />
      <AddTodo todo={todo} onChange={onChange} addTodo={addTodo} />
    </div>
  );
}

export default App;
