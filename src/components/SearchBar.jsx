import React from "react";
import { BiSearch } from "react-icons/bi";

export default function SearchBar({ text, handleChange, onClick }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div className="form relative">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="btn__search" onClick={onClick}>
        <BiSearch />
      </button>
    </div>
  );
}
