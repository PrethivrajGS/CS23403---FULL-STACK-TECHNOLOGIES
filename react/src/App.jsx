import React, { useState, useEffect } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/todos')
      .then(res => res.json())
      .then(data => setTodos(data));
  }, []);

  const addTodo = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:5000/api/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task })
    });
    const newTodo = await res.json();
    setTodos([...todos, newTodo]);
    setTask('');
  };

  const toggleDone = async (id) => {
    const res = await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'PUT' });
    const updated = await res.json();
    setTodos(todos.map(todo => (todo.id === id ? updated : todo)));
  };

  const deleteTodo = async (id) => {
    await fetch(`http://localhost:5000/api/todos/${id}`, { method: 'DELETE' });
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f6f9', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Todo List</h1>
      <form onSubmit={addTodo} style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="New task"
          required
          style={{
            padding: '10px',
            fontSize: '16px',
            border: '2px solid #ccc',
            borderRadius: '4px',
            outline: 'none',
            marginRight: '10px',
            width: '250px',
          }}
        />
        <button
          style={{
            padding: '10px 15px',
            fontSize: '16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}
        >
          Add
        </button>
      </form>

      <ul style={{ listStyleType: 'none', padding: '0', marginTop: '30px', maxWidth: '600px', margin: '0 auto' }}>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              backgroundColor: '#fff',
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '4px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span
                 onClick={() => toggleDone(todo.id)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.done ? 'line-through' : 'none',
                color: todo.done ? '#888' : '#333',
                transition: 'text-decoration 0.3s ease',
              }}
            >
              {todo.task}
            </span>
            <button
              onClick={() => deleteTodo(todo.id)}
              style={{
                backgroundColor: '#e74c3c',
                color: 'white',
                borderRadius: '4px',
                padding: '5px 10px',
                marginLeft: '10px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
