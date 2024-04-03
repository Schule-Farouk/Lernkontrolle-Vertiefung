import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <h1>Aufgaben</h1>
        <ul>
          <li>
            <Link className="task-button" to="/aufgabe1">
              Aufgabe 1
            </Link>
          </li>
          <li>
            <Link className="task-button" to="/aufgabe2">
              Aufgabe 2
            </Link>
          </li>
          <li>
            <Link className="task-button" to="/aufgabe3">
              Aufgabe 3
            </Link>
          </li>
          <li>
            <Link className="task-button" to="/aufgabe4">
              Aufgabe 4
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;