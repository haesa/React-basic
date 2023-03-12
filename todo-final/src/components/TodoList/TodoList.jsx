import { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css';

export default function TodoList({ filter }) {
  // hook 인자(함수)를 콜백함수로 감싸서 전달하면 마운트될 때만 호출된다
  // 함수가 너무 무거운 일을 하는 경우 사용
  const [todos, setTodos] = useState(() => getLocalStorage('todos'));

  const addTodo = (todo) => setTodos([...todos, todo]);
  const deleteTodo = (deleted) =>
    setTodos(todos.filter((item) => item.id !== deleted.id));
  const updateTodo = (updated) =>
    setTodos(todos.map((item) => (item.id === updated.id ? updated : item)));

  useEffect(() => setLocalStorage('todos', todos), [todos]);
  const filterd = getFilteredItems(todos, filter);
  return (
    <section className={styles.container}>
      <ul className={styles.list}>
        {filterd.map((item) => (
          <Todo
            key={item.id}
            item={item}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
      <AddTodo addTodo={addTodo} />
    </section>
  );
}

const getFilteredItems = (items, filter) => {
  if (filter === 'all') return items;
  if (filter === 'active')
    return items.filter((item) => item.isChecked === false);
  if (filter === 'completed') return items.filter((item) => item.isChecked);
};

const setLocalStorage = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));
const getLocalStorage = (key) => {
  const todos = localStorage.getItem(key);
  return todos ? JSON.parse(todos) : [];
};
