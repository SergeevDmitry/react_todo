import React from 'react';
import PropTypes from 'prop-types';

function Stats (props) {
  const total = props.todos.length;
  const completed = props.todos.filter(todo => todo.completed).length;
  const notCompleted = total - completed;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <th>All tasks</th>
          <td>{total}</td>
        </tr>

        <tr>
          <th>Completed:</th>
          <td>{completed}</td>
        </tr>

        <tr>
          <th>Not Completed</th>
          <td>{notCompleted}</td>
        </tr>
      </tbody>
    </table>
  )
}

Stats.PropTypes = {
  todos: PropTypes.array.isRequired
}

export default Stats;
