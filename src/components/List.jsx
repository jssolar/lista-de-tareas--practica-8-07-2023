import React, { useState } from 'react';

const List = () => {
  const [tarea, setTarea] = useState('');
  const [nuevaTarea, setNuevaTarea] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (event) => {
    setTarea(event.target.value);
  };

  const handleClick = () => {
    if (tarea !== '') {
      setNuevaTarea([...nuevaTarea, tarea]);
      setTarea('');
    }
  };
  return (
    <div className="input-group mb-3">
      <div className="input-group-text">
        <form onSubmit={handleSubmit}>
          <input
            className="input mt-0"
            type="text"
            value={tarea}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleClick}>
            {nuevaTarea.length}
          </button>
          <ul>
            {nuevaTarea.length > 0
              ? nuevaTarea.map((item, index) => {
                  return (
                    <li
                      className="list-group-item"
                      onClick={handleClick}
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })
              : 'Ingresar nueva tarea'}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default List;
