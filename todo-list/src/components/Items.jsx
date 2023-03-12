import styles from '../css/Items.module.css';
import Item from './Item';

export default function Items({ todos, filter, onCheck, deleteTodo }) {
  if (filter === 'All') {
    return (
      <ul className={styles.list}>
        {todos.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            todo={item.todo}
            isChecked={item.isChecked}
            onCheck={onCheck}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  } else if (filter === 'Active') {
    const items = todos.filter((item) => item.isChecked === false);

    return (
      <ul className={styles.list}>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            todo={item.todo}
            isChecked={item.isChecked}
            onCheck={onCheck}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  } else if (filter === 'Completed') {
    const items = todos.filter((item) => item.isChecked);

    return (
      <ul className={styles.list}>
        {items.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            todo={item.todo}
            onCheck={onCheck}
            isChecked={item.isChecked}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    );
  }
}
