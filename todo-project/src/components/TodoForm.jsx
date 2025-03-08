import { useState } from "react";


function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      console.log(value);
      addTodo(value);
      setValue('');

    }
  }


  return (
    <div>
      <div>
        <h1>Shopping lists</h1><br />
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Add new item"
          />
          <button>submit</button>
        </form>
      </div>

    </div>
  );
};

export default TodoForm;
