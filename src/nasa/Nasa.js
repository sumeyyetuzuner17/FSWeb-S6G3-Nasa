import React from "react";

function Nasa  (props)  {
  const { data, changeDate } = props;

  return (
    <>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <img src={data.url} alt={data.title} />
      <p>{data.explanation}</p>
      <p>{data.copyright}</p>
      <button type="" onClick={() => changeDate(1)}>
        S6G3NASA
      </button>
    </>
  );
};

export default Nasa;
