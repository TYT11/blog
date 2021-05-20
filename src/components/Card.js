import React from "react";
import { Link } from "gatsby";
const Card = ({ slug, title, excerpt, imgUrl }) => {
  return (
    <div className=" flex flex-col justify-center items-center shadow-md rounded-sm overflow-hidden">
      <Link to={`post/${slug}`}>
        <div className="w-full md:w-full">
          <img src={imgUrl} alt={title} />
        </div>
        <div className="p-4 md:h-40 lg:h-auto lg:p-6">
          <div className="font-bold">{title}</div>
          <div>{excerpt}</div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
