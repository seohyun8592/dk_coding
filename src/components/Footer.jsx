import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="inner__container justify-between h-70 items-center">
        <p>© 2021 dktechin.com</p>
        <ul className="flex space-x-10">
          <li>
            <Link
              to="https://dktechin.com/service/introduce/company"
              target="_blank"
              rel="noopener noreferrer"
            >
              회사소개
            </Link>
          </li>
          <li>
            <Link
              to="https://dktechin.com/service/careers/process"
              target="_blank"
              rel="noopener noreferrer"
            >
              채용절차
            </Link>
          </li>
          <li>
            <Link
              to="https://dktechin.com/service/careers/job"
              target="_blank"
              rel="noopener noreferrer"
            >
              직무소개
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
