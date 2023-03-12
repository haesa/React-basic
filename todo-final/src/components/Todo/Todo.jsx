import { IoTrashBin } from 'react-icons/io5';
import styles from './Todo.module.css';

export default function Todo({ item, deleteTodo, updateTodo }) {
  const { id, todo, isChecked } = item;
  const handleClick = () => deleteTodo(item);
  const handleChange = (event) =>
    updateTodo({ ...item, isChecked: event.target.checked });

  return (
    <li className={styles.todo}>
      <input
        className={styles.checkbox}
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={handleChange}
      />
      <label htmlFor={id} className={styles.text}>
        {todo}
      </label>
      <button className={styles.button} onClick={handleClick}>
        <IoTrashBin />
      </button>
    </li>
  );
}
