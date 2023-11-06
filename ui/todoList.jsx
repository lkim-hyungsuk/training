// https://www.greatfrontend.com/questions/user-interface/todo-list/react/solution/improved

import "./styles.css";
import { useState, memo } from "react";
/**
 * App -> Todo List -> (Todo Item) * N
 * We want to keep the order of <TodoItem />s
 * So we will be passing the array from App to TodoList
 */

export default function App() {
  const [items, setItems] = useState([]);

  return <TodoList items={items} setItems={setItems} />;
}

function TodoList({ items, setItems }) {
  const [newItem, setNewItem] = useState();

  const handleChange = function ({ target }) {
    setNewItem(target.value);
  };

  const handleClick = function () {
    setItems([...items, newItem]);
    setNewItem("");
  };

  const handleDelete = function (target) {
    const updatedItems = items.filter((_, index) => index !== target);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          value={newItem}
          onChange={handleChange}
          type="text"
          placeholder="Add your task"
        />
        <div>
          <button onClick={handleClick}>Submit</button>
        </div>
      </form>
      <ul>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onDelete={() => handleDelete(index)}
          />
        ))}
      </ul>
    </div>
  );
}

const TodoItem = memo(function TodoItem({ item, onDelete }) {
  return (
    <li aria-live="polite">
      <span>{item}</span> <button onClick={() => onDelete()}>Delete</button>
    </li>
  );
});
