import React from "react";
import { v4 as uuidv4 } from "uuid";
import JobList from "./JobList";

export default function ReasultArea({ filtered }) {
  return (
    <section className="result__area">
      <ul className="list__item">
        {filtered.map((item) => (
          <JobList key={uuidv4()} item={item} />
        ))}
      </ul>
    </section>
  );
}
