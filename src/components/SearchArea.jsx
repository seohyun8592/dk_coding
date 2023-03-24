import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getFilteredItems } from "../api/script";
import { useSearchJob } from "../context/SearchJobContext";
import ReasultArea from "./ResultArea";
import SearchBar from "./SearchBar";

export default function SearchArea() {
  const { searchJob } = useSearchJob();
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);

  const { data: dkJobs } = useQuery(
    ["dkJobs", text],
    () => searchJob.dkJobList(),
    { staleTime: 1000 * 60 * 5 }
  );

  const filtered = getFilteredItems(dkJobs, text);
  const jobLen = dkJobs && dkJobs.length;
  const filterLen = filtered && filtered.length;

  const handleChange = (e) => {
    setText(e.target.value);
    setCount(filterLen);
  };

  const onClick = () => {
    text === "" ? setCount(jobLen) : setCount(filterLen);
  };

  useEffect(() => {
    setCount(filterLen);
  }, [filterLen]);

  return (
    <main>
      <section className="search__area">
        <h2>DKTechin 구인 현황</h2>
        <SearchBar text={text} handleChange={handleChange} onClick={onClick} />

        <p className="search__num">
          검색결과 <span>{filterLen === 0 ? 0 : count}</span>건
        </p>
      </section>
      {dkJobs && <ReasultArea filtered={filtered} />}
    </main>
  );
}
