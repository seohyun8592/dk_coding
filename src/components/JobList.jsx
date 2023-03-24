import React from "react";
import { BsClock } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaCertificate } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import { displayedAt } from "../api/script";

export default function JobList({ item }) {
  const { title, job, keywords, location } = item;
  const date = displayedAt(item);
  return (
    <>
      <li className={date < 3 ? "new" : ""}>
        <div className="title_job">
          <a href="#none" className="link_title">
            <strong>
              {title}
              <em>FT팀</em>
            </strong>
          </a>
          <span className="bundle_badge">
            {keywords &&
              keywords.map((k) => (
                <a href="#none" key={uuidv4()}>
                  {k}
                </a>
              ))}
          </span>
        </div>
        <div className="desc_job">
          <span className="badge_type">{job}</span>
          <div className="wrap_txt">
            <span className="txt_day">
              <BsClock className="w-10 mr-5" />
              {(date === 0 && "Today") ||
                (date < 3 && `${date}days ago`) ||
                new Date(date).toLocaleDateString()}
            </span>
            <span className="txt_location">
              <MdLocationOn className="mr-5" />
              {location}
            </span>
          </div>
        </div>
        <FaCertificate className="bf__cont" />
      </li>
    </>
  );
}
