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

  const borrarTarea = (index) => {
    const borrar = nuevaTarea.filter((eliminar, i) => {
      return i !== index;
    });
    setNuevaTarea(borrar);
  };
  return (
    <div className="input-group-text">
      <form onSubmit={handleSubmit}>
        <input
          className="input mt-0"
          type="text"
          value={tarea}
          onChange={handleChange}
        />
        <button className="rounded" type="submit" onClick={handleClick}>
          {nuevaTarea.length}
        </button>
        <ul>
          {nuevaTarea.length > 0 ? (
            nuevaTarea.map((item, index) => {
              return (
                <li
                  className="list-group-item lista"
                  onClick={handleClick}
                  key={index}
                >
                  {item}{' '}
                  <span
                    className="d-flex float-end"
                    onClick={() => borrarTarea(index)}
                  >
                    x
                  </span>
                </li>
              );
            })
          ) : (
            <p className="float-start">No hay tareas</p>
          )}
        </ul>
      </form>
    </div>
  );
};

export default List;
