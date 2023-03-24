import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="inner__container h-79 items-center">
        <h1>
          <Link to="/">DK_jobs</Link>
        </h1>
      </div>
    </header>
  );
}
